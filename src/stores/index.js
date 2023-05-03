import { defineStore } from 'pinia'
import {ref} from 'vue'

// pinia的返回函数的命名规范是使用use + 目标名称 + store的形式来为存储指定ID
export const useUserStore
    = defineStore('currentUser', () => {
    // 使用setup式语法
    // 默认isDeleted为1用于辨别角色 如果更新信息进入则isDeleted置0
    const currentUser = ref({
        user: {
            id: 1,
            username: '13500560235',
            userImage: 'https://wangminan-files.oss-cn-hongkong.aliyuncs.com/bucket/defaultYouDontKnow.png',
            email: 'wangminan0811@hotmail.com',
            alipayId: '2088722003402347',
            isDriver: true,
            isPassenger : true,
            isDeleted: 1
        },
        driver: {
            id: 3,
            driverId: 4,
            driversPersonalId: '330105200208153213',
            driversName: '王旻安',
            driversLicenseNo: '330106748147',
            driversLicenseType: 'C1',
            driversPlateNo: '浙AS1245',
            driversVehicleType: '白色斯柯达',
            driversExpireDate: '',
            avgScore: '',
            isDeleted: 1
        }

    })

    return {currentUser}
})