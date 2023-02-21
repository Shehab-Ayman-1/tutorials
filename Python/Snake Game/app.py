from turtle import Screen, Turtle

# Create Window
firstPlayer = input("Player 1 Name: ")
secondPlayer = input("Player 2 Name: ")
window = Screen()
window.title("Ping Pong Game")

# Window Styles
window.bgcolor("#123")
window.setup(1000, 800)
window.tracer(0)
window.listen()

# Madrab 1
madrab1 = Turtle()
madrab1.penup()
madrab1.speed(0)
madrab1.color("orange")
madrab1.shape("square")
madrab1.shapesize(6, 1)
madrab1.goto(-450, 0)


def madrab1Up():
    madrab1.sety(madrab1.ycor() + 30)


def madrab1Down():
    madrab1.sety(madrab1.ycor() - 30)


window.onkeypress(madrab1Up, "w")
window.onkeypress(madrab1Down, "s")


# Madrab 2
madrab2 = Turtle()
madrab2.penup()
madrab2.speed(0)
madrab2.color("crimson")
madrab2.shape("square")
madrab2.shapesize(6, 1)
madrab2.goto(450, 0)


def madrab2Up():
    madrab2.sety(madrab2.ycor() + 30)


def madrab2Down():
    madrab2.sety(madrab2.ycor() - 30)


window.onkeypress(madrab2Up, "Up")
window.onkeypress(madrab2Down, "Down")

# Ball
ball = Turtle()
ball.penup()
ball.speed(0)
ball.color("white")
ball.shape("circle")
ball.shapesize(1.5, 1.5)
ball.goto(0, 0)
ball.dx = 0.5
ball.dy = 0.5


# Player 1 Score
player1 = 0
score1 = Turtle()
score1.speed(0)
score1.penup()
score1.hideturtle()
score1.color("#fff")
score1.goto(0, 350)
score1.write("{}: {}".format(firstPlayer, player1),
             align="center", font=("cursive", 24, "bold"))

# Player 2 Score
player2 = 0
score2 = Turtle()
score2.speed(0)
score2.penup()
score2.hideturtle()
score2.color("#fff")
score2.goto(0, 300)
score2.write("{}: {}".format(secondPlayer, player2),
             align="center", font=("cursive", 24, "bold"))


# Game Loop
while True:
    window.update()

    ball.sety(ball.ycor() + ball.dy)
    ball.setx(ball.xcor() + ball.dx)

    if (ball.ycor() >= 390):
        ball.dy *= -1

    elif (ball.ycor() <= -390):
        ball.dy *= -1

    elif (ball.xcor() >= 490):
        ball.goto(0, 0)
        ball.dx *= -1
        score2.clear()
        player2 += 1
        score2.write("{}: {}".format(secondPlayer, player2),
                     align="center", font=("cursive", 24, "bold"))

    elif (ball.xcor() <= -490):
        ball.goto(0, 0)
        ball.dx *= -1
        score1.clear()
        player1 += 1
        score1.write("{}: {}".format(firstPlayer, player1),
                     align="center", font=("cursive", 24, "bold"))

    if (((ball.xcor() < -440) and (ball.xcor() > -450)) and ((ball.ycor() < madrab1.ycor() + 60) and (ball.ycor() > madrab1.ycor() - 60))):
        ball.setx(-440)
        ball.dx *= -1

    if ((ball.xcor() > 440) and (ball.xcor() < 450)) and ((ball.ycor() < madrab2.ycor() + 60) and (ball.ycor() > madrab2.ycor() - 60)):
        ball.setx(440)
        ball.dx *= -1
