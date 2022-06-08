controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    bomb = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 a a 2 . . . . . . . . . 
        . . 5 5 a 2 2 2 2 4 4 4 . . . . 
        . . . 5 a a 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spacePlane, -20, 50)
    bomb.startEffect(effects.warmRadial)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dart = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 a a 2 . . . . . . . . . 
        . . 5 5 a 2 2 2 2 4 4 4 . . . . 
        . . . 5 a a 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
    enemyVX += -5
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let dart: Sprite = null
let bomb: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
    2 2 . . . . . . . . . . . . . . 
    2 c 2 2 . . . . . . . . . . . . 
    2 c c c 2 2 . . . . . . . . . . 
    . 2 c c c c 2 2 . . . . . . . . 
    . 2 c c c c c c 2 2 . . . . . . 
    . 2 c c c c c c c c 2 2 . . . . 
    . . 2 c c c c c c c c c 2 2 . . 
    . . 2 c c c c c c c c c c c 2 2 
    . . 2 c c c c c c c c c c c 2 2 
    . . 2 c c c c c c c c c 2 2 . . 
    . 2 c c c c c c c c 2 2 . . . . 
    . 2 c c c c c c 2 2 . . . . . . 
    . 2 c c c c 2 2 . . . . . . . . 
    2 c c c 2 2 . . . . . . . . . . 
    2 c 2 2 . . . . . . . . . . . . 
    2 2 . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
spacePlane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(spacePlane, 200, 200)
let enemyVX = -50
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 . . . . 2 . . . . . 
        2 2 2 8 8 8 2 2 . . 2 . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 . 2 2 2 . 2 . . . . 
        . . . . . . . . 2 . . . . . . . 
        . . . . . . . . 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    bogey.setVelocity(enemyVX, 0)
    bogey.setPosition(180, randint(8, 112))
    if (bogey.x < 0) {
        bogey.destroy()
    }
})
