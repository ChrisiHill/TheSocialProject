$(function() {
    "Use Strict"
    if ($(".ReadMore")) {
        $(".ReadMore").next().css({
            overflow: "hidden",
            height: "159px"
        })
    }

    $(".PostSel").on("click", function() {
        $(".PostSel").removeClass("active")
        $(this).addClass("active")
    })
    $(".Status").on("click", function() {
        $(".PostBody .Status").css({
            display: "block"
        }).siblings().css({
            display: "none"
        })
    })
    $(".Photo").on("click", function() {
        $(".PostBody .Photo").css({
            display: "block"
        }).siblings().css({
            display: "none"
        })
    })
    $(".Video").on("click", function() {
        $(".PostBody .Video").css({
            display: "block"
        }).siblings().css({
            display: "none"
        })
    })
    $(".Audio").on("click", function() {
        $(".PostBody .Audio").css({
            display: "block"
        }).siblings().css({
            display: "none"
        })
    })

    $(".SearchText").on("click", function() {
        $(".SearchForm").animate({
            left: "20px"
        }, 150, function() {})
    })
    $(".SearchBtn").on("click", function() {
        if ($(".SearchForm").css('left') != '20px') {
            $(".SearchForm").animate({
                left: "20px"
            }, 150, function() {})
        } else {
            $(".SearchBtn").css({
                color: "red"
            })
        }
    })
    $(".HideSearch").on("click", function() {
        if ($(".SearchForm").css('left') == '20px') {
            $(".SearchForm").animate({
                left: "-9vw"
            }, 150, function() {})
        }
    });

    autosize(document.getElementsByClassName("autoExpand"));

    $(".LoginForm").css({
        marginTop: "-=100vh"
    })
    $(".SignupForm").css({
        marginTop: "-=100vh"
    })
    $(".NoAccount").css({
        left: "-=100vw"
    })
    $(".Account").css({
        right: "-=100vw"
    })
    $(".ForgotPW").css({
        right: "-=100vw"
    })
    $(".Login").on("click", function() {
        console.log("Clicked")
        $(".LoginScreen").css({
            MarginTop: "100vh",
            left: "0vw"
        })
        $(".PopupSign").show()
        $(".LoginScreen").show().animate({
            opacity: "1",
        }, 200, function() {
            $(".LoginForm").animate({
                marginTop: "+=100vh"
            }, 100, function() {})
            $(".NoAccount").animate({
                left: "+=100vw"
            }, 100, function() {})
            $(".ForgotPW").animate({
                right: "+=100vw"
            }, 100, function() {})
        })
    })
    $(".SignUp").on("click", function() {
        $(".SignupScreen").css({
            MarginTop: "100vh",
            right: "0vw"
        })
        $(".PopupSign").show()
        $(".SignupScreen").show().animate({
            opacity: "1",
        }, 200, function() {
            $(".SignupForm").animate({
                marginTop: "+=100vh"
            }, 100, function() {})
            $(".Account").animate({
                right: "+=100vw"
            }, 100, function() {})
        })
    })
    $(".Close").on("click", function() {
        if ($(".LoginForm").is(":visible")) {
            $(".LoginForm").animate({
                marginTop: "-=100vh"
            }, 100, function() {
                $(".NoAccount").animate({
                    left: "-=100vw"
                }, 100, function() {})
                $(".ForgotPW").animate({
                    right: "-=100vw"
                }, 100, function() {})
                $(".LoginScreen").animate({
                    opacity: "0",
                }, 200, function() {
                    $(".LoginScreen").hide()
                })
            })
        } else {
            $(".SignupForm").animate({
                marginTop: "-=100vh"
            }, 100, function() {
                $(".Account").animate({
                    right: "-=100vw"
                }, 100, function() {})
                $(".SignupScreen").animate({
                    opacity: "0",
                }, 200, function() {
                    $(".SignupScreen").hide()
                })
            })
        }
        $(".PopupSign").hide()
    })
    $(".NoAccount").on("click", function() {
        $(".SignupScreen").show()
        $(".SignupScreen").css({
            opacity: "1",
            MarginTop: "-=100vh",
            left: "-=100vw"
        })
        $(".SignupScreen").animate({}, 200, function() {
            $(".SignupForm").animate({
                marginTop: "+=100vh"
            }, 0, function() {})
            $(".Account").animate({
                right: "+=100vw"
            }, 0, function() {})
        })
        $(".SignupScreen").animate({
            left: "+=100vw"
        })
        $(".LoginScreen").animate({
            left: "+=100vw"
        }, function() {
            $(".LoginForm").animate({
                marginTop: "-=100vh"
            }, 100, function() {
                $(".NoAccount").animate({
                    left: "-=100vw"
                }, 100, function() {})
                $(".ForgotPW").animate({
                    right: "-=100vw"
                }, 100, function() {})
                $(".LoginScreen").animate({
                    opacity: "0",
                }, 200, function() {
                    $(".LoginScreen").hide()
                })
            })
        })
    })
    $(".Account").on("click", function() {
        $(".LoginScreen").show()
        $(".LoginScreen").css({
            opacity: "1",
            MarginTop: "-=100vh",
            right: "-=100vw"
        })
        $(".LoginScreen").animate({}, 200, function() {
            $(".LoginForm").animate({
                marginTop: "+=100vh"
            }, 100, function() {})
            $(".NoAccount").animate({
                left: "+=100vw"
            }, 100, function() {})
            $(".ForgotPW").animate({
                right: "+=100vw"
            }, 100, function() {})
            $(".LoginScreen").animate({
                left: "0",
                right: "-=100vw"
            })
            $(".SignupScreen").animate({
                left: "-=100vw"
            }, function() {
                $(".SignupForm").animate({
                    marginTop: "-=100vh"
                }, 100, function() {
                    $(".Account").animate({
                        right: "-=100vw"
                    }, 100, function() {})
                    $(".SignupScreen").animate({
                        opacity: "0",
                    }, 200, function() {
                        $(".SignupScreen").css({
                            MarginTop: "+=100vh",
                            left: "0vw"
                        })
                        $(".SignupScreen").hide()
                    })
                })
            })
            $(".LoginScreen").animate({}, function() {

            })
        })
    })
    $(".Back").hide()
    $(".BackPointer").hide()
    $(".Next").on("click", function() {
        $(".Parts").animate({
            marginLeft: "-=808px"
        }, 100, function() {
            $(".Back").show()
            $(".BackPointer").show()

            if ($(".Parts").css("margin") == "0px 0px 0px -808px") {
                $(".Next").hide()
                $(".NextPointer").hide()
                $(".FinishedBtn").show()
            }
        })
    })
    $(".Back").on("click", function() {
        $(".FinishedBtn").hide()
        $(".Next").show()
        $(".NextPointer").show()
        console.log($(".Parts").css("margin"))
        $(".Parts").animate({
            marginLeft: "+=808px"
        }, 200, function() {
            console.log($(".Parts").css("margin"))
            if ($(".Parts").css("margin") == "0px 0px 0px 808px") {
                $(".Back").hide()
                $(".BackPointer").hide()
            }
        })

    })
})