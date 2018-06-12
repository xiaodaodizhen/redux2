// 定义动作常量

export const ADD = "ADD";
// 异步加1，这个动作是saga发的，saga会监听这个动作，进行业务处理，处理完成后会派发真正修改状态的动作
export const ADDASYNC = "ADDASYNC";