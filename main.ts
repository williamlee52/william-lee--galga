sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    shots = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 4 5 5 5 2 2 2 2 2 . . . . . 
. . 4 5 5 5 2 2 2 2 2 2 . . . . 
. . 4 5 5 5 2 2 2 2 2 2 2 . . . 
. . 4 5 5 5 2 2 2 2 2 2 . . . . 
. . 4 5 5 5 2 2 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, plane, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let coronavirus: Sprite = null
let shots: Sprite = null
let plane: Sprite = null
plane = sprites.create(img`
. . . . . b b b . . . . . . . . 
. . . c c c b b b . . . . . . . 
c c . c c c b b b b . . . . . . 
. c . c c c b b b b b . . . . . 
. c 6 c c c d d d b b b . . . . 
. c c c c c d b b b b b c b b . 
. . c c c c d b d d b b c c c c 
. . 6 c c c d d d d b b c b b b 
. . 6 c c c d b d d b b c c c c 
. . c c c c d b b b b b c b b . 
. c c c c c d d d b b b . . . . 
. c 6 c c c b b b b b . . . . . 
. c . c c c b b b b . . . . . . 
c c . c c c b b b . . . . . . . 
. . . . . b b b . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
plane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(plane, 125, 125)
game.onUpdateInterval(500, function () {
    coronavirus = sprites.create(img`
. f f f f f f f . . . . . . . . 
f f 7 7 7 7 6 f . . . . . . . . 
f 7 7 7 7 7 7 f f . . . . . . . 
f 7 7 7 6 7 7 7 f . . . . . . . 
f 7 6 7 7 6 7 7 f f f f f . . . 
f 6 7 7 6 7 7 7 7 7 7 7 f f . . 
f 7 7 7 7 7 7 6 7 7 7 6 7 f . . 
f f 7 7 7 6 7 7 6 6 7 7 6 f . . 
. f f f f f 7 7 7 7 7 7 7 f . . 
. . . . . f 7 7 7 7 6 7 7 f . . 
. . . . . f 7 7 6 6 7 7 7 f . . 
. . . . . f f 7 7 7 7 7 f f . . 
. . . . . . f f f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    coronavirus.setVelocity(-100, 0)
    coronavirus.setPosition(180, Math.randomRange(0, 120))
})
