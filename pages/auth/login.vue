<script setup lang="ts">
definePageMeta({layout: "auth"})
useHead({
    title: 'เข้าสู่ระบบ',
    meta: [
      {
        name: 'keywords',
        content: 'เข้าสู่ระบบ, Nuxt 3, Backend'
      },
      {
        name: 'Description',
        content: 'เข้าสู่ระบบ'
      }
    ]
})

const router = useRouter()
const checkbox = ref(false);
const valid = ref(true);
const show1 = ref(false);
const password = ref("");
const email = ref("");

const {ruleRequired, ruleEmail, rulePassLen} = useFormRules()
const submit = async () => {
    if(ruleRequired(email.value) == true && ruleRequired(password.value) == true && ruleEmail(email.value) == true && rulePassLen(password.value) == true){
        const config = useRuntimeConfig()
        const api:string = config.public.api.url;

        const {data, error} = await useFetch(`${api}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "email": email.value,
                "password": password.value
            })
        })
        if(error.value != null){
            if(error.value.status === 400){
                console.log('Error', error);
            }
        }else{
            await router.push({path: '/backend/dashboard'})
        }
    }
}
</script>

<template>
  <v-container id="login" class="fill-height justify-center" tag="section">
    <v-row justify="center" class="h-100vh" align="center">
      <v-col sm="12" md="12" lg="12" xl="7">
        <v-card elevation="10">
          <v-row>
            <v-col
              lg="7"
              class="bg-primary d-none d-md-flex align-center justify-center"
            >
              <div class="d-none d-sm-block">
                <div class="d-flex align-center pa-10 v-col-8">
                  <div>
                    <h2 class="text-h4 text-white font-weight-medium">
                      การออกแบบที่ไม่มีสิ้นสุด เราสร้างมันด้วยรักและใส่ใจ
                    </h2>
                    <h6
                      class="text-subtitle-1 mt-4 text-white font-weight-regular"
                    >
                    ไอทีจีเนียสช่วยให้นักพัฒนาได้เรียนรู้เพิ่มเติม ผ่านหลักสูตรการอบรมที่หลากหลาย
                    ครอบคลุมทุกด้าน ทั้งออกแบบ โปรแกรมมิ่ง ฐานข้อมูล โมบายแอพ ตลอดจน devops และอื่นๆ
                    </h6>
                    <v-btn
                      class="mt-6 text-capitalize"
                      size="x-large"
                      variant="outlined"
                      color="white"
                      >เรียนรู้เพิ่มเติม</v-btn
                    >
                  </div>
                </div>
              </div>
            </v-col>
            <v-col lg="5">
              <div class="pa-7 pa-sm-12">
                <p class="text-center"><img src="/images/logos/dark-logo-icon.svg" /></p>
                <h2 class="font-weight-bold text-center mt-4 text--darken-2">เข้าสู่ระบบ</h2>
                <h6 class="text-subtitle-1 mb-7 text-center">
                  ยังไม่เป็นสมาชิกใช่มั้ย ?
                  <v-btn to="/auth/register" variant="plain"
                    >ลงทะเบียน</v-btn
                  >
                </h6>

                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                  @submit.prevent ="submit"
                >
                  <v-text-field
                    v-model="email"
                    :rules="[ruleRequired, ruleEmail]"
                    label="E-mail"
                    class="mt-4"
                    required
                    variant="outlined"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    :counter="10"
                    :rules="[ruleRequired, rulePassLen]"
                    label="Password"
                    class="mt-4"
                    required
                    variant="outlined"
                    type="password"
                  ></v-text-field>

                  <div class="d-block d-sm-flex align-center mb-4 mb-sm-0">
                    <v-checkbox
                      v-model="checkbox"
                      :rules="[(v) => !!v || 'ต้องยอมรับเงื่อนไขการใช้งานก่อนไปต่อ!']"
                      label="จำฉันไว้ ?"
                      required
                      hide-details
                    ></v-checkbox>
                    <div class="ml-auto">
                      <nuxt-link to="/auth/forgotpass" class="text-primary text-decoration-none">ฉันลืมรหัสผ่าน</nuxt-link>
                    </div>
                  </div>
                  <v-btn
                    color="primary"
                    type="submit"
                    block
                    class="py-6"
                    size="x-large"
                    submit
                    >เข้าสู่ระบบ</v-btn
                  >
                  <div class="text-center mt-6"><v-btn variant="text" class="mb-4" to="/"><i class="mdi mdi-arrow-left"></i> กลับหน้าหลัก</v-btn></div>
                </v-form>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>