$(document).ready(function() {
    var questions = [
      "Hello, my love. I'm so glad you're here. Will you spend some time with me?",
      "Great! I can't imagine my life without you. Will you be mine forever?",
      "You always make me feel so special. Would you like to know how much I love you?",
    ];
    var questionIndex = 0;
  
    // show first question
    showQuestion();
  
    // handle Yes button click on dialogue box
    $("#yes-btn").click(function() {
      // show next question
      showNextQuestion();
    });
  
    // handle No button click on dialogue box
    $("#no-btn").click(function() {
      // hide dialogue box
      $(".dialogue-box").hide();
      // show "Please..." box
      $(".please-box").show();
    });
  
    // handle Yes button click on "Please..." box
    $("#please-yes-btn").click(function() {
      // hide "Please..." box
      $(".please-box").hide();
      // show dialogue box
      $(".dialogue-box").show();
    });
  
    function showQuestion() {
      // show current question
      $(".question").text(questions[questionIndex]);
    }
  
    function showNextQuestion() {
      questionIndex++;
      // check if all questions have been asked
      if (questionIndex >= questions.length) {
        // hide dialogue box and show video box
        $(".dialogue-box").hide();
        $(".video-box").show();
      } else {
        // show next question
        showQuestion();
      }
    }
  });
  