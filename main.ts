scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    info.changeScoreBy(26)
    tiles.setTileAt(location, sprites.dungeon.floorLight2)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    info.changeScoreBy(3)
    info.changeLifeBy(-1)
    tiles.setTileAt(location, sprites.dungeon.floorLight2)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    info.changeScoreBy(5)
    tiles.setTileAt(location, sprites.dungeon.floorLight2)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    info.changeScoreBy(-5)
    info.changeLifeBy(-3)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.floorLight2)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.setWallAt(tiles.getTileLocation(14, 12), false)
    tiles.setTileAt(location, sprites.dungeon.darkGroundNorthEast1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    info.changeLifeBy(20)
    wonder_girl = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 . . . . . . . . . 
        . . . 5 f 5 5 5 f 5 . . . . . . 
        . . . 5 5 5 4 5 5 5 . . . . . . 
        . . . f 2 2 2 2 2 f . . . . . . 
        . . . f d d d d d f . . . . . . 
        . . . f d e d e d f . . . . . . 
        . . . f d d d d d f . . . . . . 
        . . . f 5 5 d 5 5 f . . . . . . 
        . . . 5 5 5 5 5 5 5 . . . . . . 
        . . . 5 f 5 2 5 f 5 . . . . . . 
        . . . . 5 5 5 5 5 . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    game.over(true)
})
let wonder_girl: Sprite = null
wonder_girl = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f 5 f f . . . . . . . 
    . . . f f 5 4 5 f f . . . . . . 
    . . . f 2 2 2 2 2 f . . . . . . 
    . . . f d d d d d f . . . . . . 
    . . . f d e d e d f . . . . . . 
    . . . f d d d d d f . . . . . . 
    . . . f f f d f f f . . . . . . 
    . . . f f 2 2 2 f f . . . . . . 
    . . . f f 2 2 2 f f . . . . . . 
    . . . . . 5 4 5 . . . . . . . . 
    . . . . . 8 . 8 . . . . . . . . 
    . . . . . 2 . 2 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let projectile = sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 7 7 7 7 7 7 7 . . . . 
    . . . . 7 7 7 7 7 7 7 7 7 . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . . . 7 7 7 7 7 7 7 7 7 . . . 
    . . . . . 7 7 7 7 7 7 7 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, wonder_girl, 50, 50)
controller.moveSprite(wonder_girl, 50, 50)
scene.setBackgroundColor(11)
tiles.setTilemap(tilemap`level2`)
tiles.placeOnRandomTile(wonder_girl, sprites.dungeon.stairWest)
scene.cameraFollowSprite(wonder_girl)
info.setLife(10)
