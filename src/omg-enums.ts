const enum Direction {
    Up,
    Down,
    Left,
    Right
}

function move(direction: Direction) {
    switch(direction) {
        case Direction.Down: break;
        case Direction.Left: break;
        case Direction.Right: break;
        case Direction.Up: break;
        default:
            direction
    }
}

move(Direction.Up)
move(Direction.Down)
move(0)
move(1)
move(1000)

enum Rights {
    A = 1,
    B = 2,
    C = 3
}

const rights = Rights.A & Rights.B

// String Enums

enum Status {
    Admin = "Admin",
    User = "User",
    Moderator = "Moderator"
}

enum UserRoles {
    Admin = "Admin",
    User = "User",
    Moderator = "Moderator"
}


function closeThread(threadId: number, status: Status) {
    if(status === Status.Admin || status === Status.Moderator) {
        // close Thread
    } else {
        throw Error("Users cant close")
    }
}

closeThread(1990, Status.Admin)
closeThread(1299, Status.Moderator)

const role = "Admin"

//closeThread(1000, UserRoles.Admin)
//closeThread(1000, role)

const StatusRoles = {
    Admin: "Admin",
    Moderator: "Moderator",
    User: "User"
} as const

type StatusRoles = keyof typeof StatusRoles

function closeThread2(threadId: number, status: StatusRoles) {}

closeThread2(1000, StatusRoles.Admin)
closeThread2(1000, StatusRoles.Moderator)
closeThread2(1000, "Moderator")

export {}