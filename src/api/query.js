/*
 * @Author: YuanQiii
 * @GitHub: https://github.com/YuanQiii
 * @Date: 2022-04-18 22:15:51
 * @FilePath: \SecurityCheck_Vue\src\api\query.js
 */
import request from "@/utils/request";

// 玉柴查询
export function ycQueryApi(data) {
    return request({
        url: "ycQuery",
        method: "post",
        data
    });
}

// 玉柴获取二维码
export function ycQRCodeApi(sequenceCode, encryptCode) {
    return request({
        url: "ycQRCode",
        method: "get",
        params: {
            sequenceCode,
            encryptCode
        }
    });
}

// 弗列加查询
export function filtrationQueryApi(data) {
    return request({
        url: "filtrationQuery",
        method: "post",
        data
    });
}