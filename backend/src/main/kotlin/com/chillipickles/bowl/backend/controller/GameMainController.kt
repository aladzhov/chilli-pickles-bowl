package com.chillipickles.bowl.backend.controller

import com.chillipickles.bowl.backend.model.*
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.ResponseBody

@Controller
class GameMainController {

    companion object {
        val LOGGER: Logger = LoggerFactory.getLogger(GameMainController::class.java)
    }

    @GetMapping("/")
    fun index(): String {
        LOGGER.info("Tuk")
        return "index.html"
    }

    @GetMapping("/api/keep-alive")
    fun keepAlive() {
        LOGGER.info("keeping alive")
    }

    @GetMapping("/api/setup/setups")
    @ResponseBody
    fun gameSetups(): List<GameDto> {
        LOGGER.info("Game setups")

        val sampleGame = GameDto(
            id = 1,
            name = "Gyuvetch League 1st round",
            players = listOf(
                PlayerDto(1, "Martin", "rerolls=2", 0),
                PlayerDto(2, "Rossen", "rerolls=3", 0)
            ),
            pieces = listOf(
                PieceDto(
                    1,
                    -1,
                    "Ball",
                    "blood-bowl-ball.png",
                    PointDto(1, 1),
                    colidable = false
                )
            ),
            field = FieldDto(
                id = 1,
                type = FieldType.BLOOD_BOWL,
                mainColor = "#8FBC8F",
                secondaryColor = "#90EE90",
                width = 15,
                height = 26
            ),
            dice = listOf(
                DieDto(id = 1, sides = 6, side = mapOf(1 to "bb_1.png", 2 to "bb_2.png", 3 to "bb_3.png", 4 to "bb_4.png", 5 to "bb_5.png", 6 to "bb_6.png")),
                DieDto(id = 1, sides = 6),
            ),
            timed = false,
            takebacks = false,
            turnsPerPlayer = 8
        )

        return listOf(sampleGame)
    }
}