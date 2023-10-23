export const useFormRules = () => {
    return {
        ruleRequired: (value: string) => !!value || 'กรุณากรอกข้อมูลให้ครบถ้วน',
        ruleEmail: (value: string) => {
            const pattern =
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return pattern.test(value) || "รูปแบบอีเมล์ไม่ถูกต้อง";
        },
        rulePassLen: (v: string) => (!!v && v.length >= 6) || "รหัสผ่านต้องยาวมากกว่า 6 ตัว",
    }
}