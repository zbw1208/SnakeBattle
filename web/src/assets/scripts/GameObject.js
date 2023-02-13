const GAME_OBJECTS = [];

export class GameObject {
    constructor() {
        GAME_OBJECTS.push(this);
        this.timedelta = 0;     //  两帧执行之间的时间间隔
        this.hash_start = false;    //  start()尚未执行
    }

    start() {       // 只执行一次
    }

    update() {      //  除第一帧以外每一帧都执行
    }

    on_destroy () {     //  删除前执行

    }

    destroy () {
        this.on_destroy();

        for(let i in GAME_OBJECTS) {
            const obj = GAME_OBJECTS[1];
            if(obj == this) {
                GAME_OBJECTS.splice(i);
                break;
            }
        }
    }
}

let last_timestamp;     //  上一次执行的时刻
const step = timestamp => {
    for (let obj of GAME_OBJECTS) {
        if (!obj.hash_start) {
            obj.hash_start = true;
            obj.start();
        }
        else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }

    last_timestamp = timestamp;
    requestAnimationFrame(step)     //  上一帧执行step
}

requestAnimationFrame(step)     //  迭代实现每一帧都执行