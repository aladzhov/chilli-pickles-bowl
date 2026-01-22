package com.chillipickles.bowl.backend.controller

import com.chillipickles.bowl.backend.model.*
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.http.ResponseEntity
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
    fun keepAlive(): ResponseEntity<Unit> {
        LOGGER.info("keeping alive")
        return ResponseEntity.ok().build()
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
                    PointDto(2, 2),
                    colidable = false,
                    description = DescriptionDto(
                        mapOf(
                            Pair("MA", "6"), Pair("ST", "3"), Pair("AG", "3+"), Pair("PA", "4+"), Pair("AV", "9+")
                        )
                    )
                ),
                PieceDto(
                    2,
                    1,
                    "cultist",
                    "deamonsofslaanesh/cultist.png",
                    PointDto(3, 13),
                    colidable = true,
                    description = DescriptionDto(
                        mapOf(
                            Pair("MA", "6"), Pair("ST", "3"), Pair("AG", "3+"), Pair("PA", "4+"), Pair("AV", "9+")
                        )
                    )
                ),
                PieceDto(
                    3,
                    1,
                    "cultist",
                    "deamonsofslaanesh/cultist.png",
                    PointDto(5, 13),
                    colidable = true,
                    description = DescriptionDto(
                        mapOf(
                            Pair("MA", "6"), Pair("ST", "3"), Pair("AG", "3+"), Pair("PA", "4+"), Pair("AV", "9+")
                        )
                    )
                ),
                PieceDto(
                    4,
                    1,
                    "deamonette",
                    "deamonsofslaanesh/deamonette.png",
                    PointDto(7, 12),
                    colidable = true,
                    description = DescriptionDto(
                        mapOf(
                            Pair("MA", "7"), Pair("ST", "3"), Pair("AG", "2+"), Pair("PA", "-"), Pair("AV", "8+")
                        )
                    )
                ),
                PieceDto(
                    5,
                    1,
                    "keeper of secrets",
                    "deamonsofslaanesh/keeperofsecrets.png",
                    PointDto(7, 10),
                    colidable = true,
                    description = DescriptionDto(
                        mapOf(
                            Pair("MA", "7"), Pair("ST", "5"), Pair("AG", "2+"), Pair("PA", "-"), Pair("AV", "9+")
                        )
                    )
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