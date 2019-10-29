import Error from "./Error";

/**
 * 事件参数接口
 */
export default class Event<T = any> {
    // 事件ID
     id:string;
    // 事件类型
     type:string;
    //事件参数
     data?: T
    // 异常信息
     error?:Error;
    constructor(){
        this.id = '';
        this.type = '';
    }
}