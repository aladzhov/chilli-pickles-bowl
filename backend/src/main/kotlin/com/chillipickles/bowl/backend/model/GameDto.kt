package com.chillipickles.bowl.backend.model

data class GameDto(
    val id: Int,
    val players: List<PlayerDto>,
    val pieces: List<PieceDto>,
    val field: FieldDto,
    val timed: Boolean = false,
    val takebacks: Boolean = false,
    val dice: List<DieDto>? = null,
    val turnsPerPlayer: Int? = null
)

data class PlayerDto(
    val id: Int,
    val name: String,
    val text: String = "",
    val turn: Int? = null,
    val time: Int? = null,
)

data class PieceDto(
    val id: Int,
    val owner: Int,
    val name: String,
    val image: String,
    val position: PointDto,
    val description: DescriptionDto? = null,
    val colidable: Boolean = false
)

data class PointDto(
    val x: Number,
    val y: Number
)

data class DescriptionDto(
    val properties: Map<String, String>
)

data class FieldDto(
    val id: Int,
    val type: FieldType,
    val mainColor: String = "#8FBC8F",
    val secondaryColor: String? = "#90EE90",
    val width: Int,
    val height: Int,
    val specialTiles: List<TileDto>? = null
)

data class TileDto(
    val id: Int,
    val image: String? = null,
    val position: PointDto
)

data class DieDto(
    val id: Int,
    val sides: Int,
    val side: Map<Int, String?>? = null
)

enum class FieldType {
    CHESS, BLOOD_BOWL, SPORT
}