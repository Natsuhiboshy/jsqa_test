// src/app/course/index.js

(function () {

    let fs = require('fs');
    let cp = require('child_process');
    let path = require('path');

    const config = require('../config/config');
    const c = config.getInstance();

    let loadedConfig = null;

    c.loadConfig('lessons.config.json', parseConfig);

    startDate = new Date();

    function parseConfig(err, data) {
        if (err) {
            console.log(err);
        }
        loadedConfig = JSON.parse(data);
        console.log('Lessons config loaded:', loadedConfig);

        loadAndParseAllLessonsAsAText(loadedConfig.lessons);
        loadAndParseAllLessonsAsAOutput(loadedConfig.lessons);
    }

    // LessonFactory
    // Parent Constructor
    function LessonFactory() {}

    // Parent Method
    LessonFactory.prototype.execute = function () {
        // console.log('Execute:', this.lessonName);
        if (this.tasks) {
            for (let i = 0; i < this.tasks.length; i++) {
                console.log('Task:', this.tasks[i]);
            }
        }
    };
    // Static Factory Method - factory
    LessonFactory.factory = function (lessonName, type) {
        var constr = type,
            newLesson;
        // Error if constructor doesn't exist
        if (typeof LessonFactory[constr] !== "function") {
            throw {
                name: 'Error',
                message: constr + " doesn't exist"
            };
        }
        // Contructor is here, let's inherit 'execute' from parent constructor, but only once
        if (typeof LessonFactory[constr].prototype.execute !== 'function') {
            LessonFactory[constr].prototype = new LessonFactory();
        }
        // Create new instance
        newLesson = new LessonFactory[constr]();
        newLesson.lessonName = lessonName;
        return newLesson;
    };
    // Concrete lesson constructions
    LessonFactory.Theoretical = function () {
        this.tasks = null;
    };
    LessonFactory.Practical = function () {
        this.tasks = [1, 2, 3];
    };

    // --------------------------------

    function loadLessonAsAText(lesson, callback) {
        let lessonId = lesson.lessonId;
        let lessonFilePath = path.join(__dirname, '..', 'lessons', lessonId, 'l-' + lessonId + '.js');

        console.log('\n\nLoad lesson as a text, lessonId =', lessonId, 'lesson file path:', lessonFilePath);

        function augmentedCallback(err, data) { callback(err, data, lesson);};

        fs.readFile(lessonFilePath, 'utf8', augmentedCallback);
    }

    function parseLoadedLessonText(err, lessonText, lesson) {
        let lessonId = lesson.lessonId;
        if (err) { console.log('Error loading file:', err); }

        function extractTaskById(taskId, nextTaskId) {
            let taskStartRegExp = new RegExp('Task ' + lessonId + '\.' + taskId, 'g');
            let taskEndRegExp = new RegExp('Task ' + lessonId + '\.' + nextTaskId, 'g');
                
            taskStartRegExp.test(lessonText);
            taskEndRegExp.test(lessonText);

            console.log('Extract Task by indexes:', taskStartRegExp.lastIndex, taskEndRegExp.lastIndex);

            return lessonText.substring(taskStartRegExp.lastIndex, taskEndRegExp.lastIndex);
        }

        function checkTaskById(taskId, taskText) {
            let answerRegExp = new RegExp(lesson.tasks[taskId], 'i');
            return answerRegExp.test(taskText)
        }

        const taskText = extractTaskById('01', '02');
        
        console.log('-------------- Answer matches: ', checkTaskById('01', taskText), '\n(Task text:', taskText, '');
    }

    // Way 1: Parse Lesson's text:
    function loadAndParseAllLessonsAsAText(lessons) {
        // return;
        console.h1('Load and parse all Lessons as a Text');
        for (let i = 0; i < lessons.length; i++) {
            loadLessonAsAText(lessons[i], parseLoadedLessonText);
        }
    }
    
    // Way 2: Parse Lesson's output.    
    // Execute lesson to get output:
    function loadAndParseAllLessonsAsAOutput(lessons) {
        return;
        console.h1('Load and parse all Lessons as an Output');
        for (let i = 0; i < lessons.length; i++) {
            executeLesson(lessons[i], parseLoadedLessonText);
        }
    }


    function executeLesson(lesson, callback) {
        let lessonId = lesson.lessonId;
        cp.exec('node src/app/lessons/' + lessonId + '/l-' + lessonId + '.js', function(error, stdout, stderr) {
            callback(error, stdout, lesson);
        });
    }
    
    // Public Module API
    exports.getStartDate = () => startDate;
    exports.createLesson = LessonFactory.factory;
    exports.setStartDate = (value) => startDate = value;

})();