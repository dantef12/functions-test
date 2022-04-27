function function1 () {
    basic.showString("Hello!")
    basic.pause(200)
    basic.showIcon(IconNames.Giraffe)
    basic.pause(200)
}
function function_2 () {
    location = randint(0, 5)
    sprite = game.createSprite(location, 0)
    while (true) {
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
        if (sprite.isTouchingEdge()) {
            location = randint(0, 5)
            sprite = game.createSprite(location, 0)
            if (sprite.isTouching(sprite)) {
            	
            }
        }
    }
}
let sprite: game.LedSprite = null
let location = 0
function_2()
basic.forever(function () {
	
})
