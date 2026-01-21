package com.chillipickles.bowl.backend.controller

import org.slf4j.LoggerFactory
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping

@Controller
class GameMainController {

    companion object {
        val LOGGER = LoggerFactory.getLogger(GameMainController::class.java)
    }

//    @RequestMapping(value = ["/{path:[^\\.]*}", "/**/{path:[^\\.]*}"])
//    fun redirect(): String {
//        // Forward to home page so Angular's router can take over
//        return "forward:/index.html"
//    }

    @GetMapping("/")
    fun index(): String {
        LOGGER.info("Tuk")
        return "index.html"
    }
}