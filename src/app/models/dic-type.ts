import * as moment from 'moment';

export class DicType {
    constructor(
        public id?: string,
        public name?: string,
        public code?: string,
        public remark?: string,
        public sort?: number,
        public state?: string,
        public createTime?: string,
        public $$index?: number
    ) {

    }
    /**
     * 格式化时间
     */
    set ParseCreateTime(value: Date) {
        this.createTime = moment(value).format('YYYY-MM-DD HH:mm:ss.SSS');
    }
    /**
     * 将json转换为对象
     * @param json json字符串
     */
    public static fromJson(json: object): DicType {
        if (!json) {
            return new DicType();
        }
        if (!(json instanceof DicType)) {
            return Object.setPrototypeOf(json, DicType.prototype);
        }
        return json;
    }
    /**
     * 将json串转换成数组
     * @param json json串
     */
    public static formJsonArray(json: object): Array<DicType> {
        if (!!json && json instanceof Array) {
            const array = json as Array<object>;
            return array.map(obj => DicType.fromJson(obj));
        }
        return [];
    }

    get index(): number {
        return this.$$index;
    }
}
