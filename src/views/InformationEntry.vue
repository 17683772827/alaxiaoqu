<template>
    <div class="information-entry">
      <title-bar post-title="信息录入"></title-bar>
      <van-cell-group>
        <!-- 选择身份 -->
        <van-field v-model="identity" label="选择身份" placeholder="选择身份" @click="show0 = true" />
        <van-action-sheet v-model="show0" :actions="actions0" @select="onSelect0" />
        <!-- 选择小区 -->
        <van-field v-model="cellName" label="选择小区" placeholder="选择小区" @click="show1 = true" />
        <van-action-sheet v-model="show1" :actions="actions1" @select="onSelect1" />
        <!-- 选择栋、层、号 -->
        <van-field v-model="cellAddress" label="选择详细地址" placeholder="选择小区" @click="show2 = true" />
        <van-action-sheet v-model="show2">
          <van-picker show-toolbar title="选择详细地址" :columns="columns" @cancel="onCancel" @confirm="onConfirm" />
        </van-action-sheet>
        <van-field v-model="name" label="姓名" placeholder="请输入姓名" />
        <van-field v-model="telephone" label="手机号" type="tel" placeholder="请输入手机号" />
        <van-field
          v-model="yzm"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
        >
          <template #button>
            <van-button size="small" type="primary">发送验证码</van-button>
          </template>
        </van-field>
      </van-cell-group>
      <div class="information-entry-tj">
        <van-button type="info" class="information-entry-tj-wrapper" @click="tj">提交</van-button>
      </div>
    </div>
</template>

<script>
    import TitleBar from "../components/TitleBar"
    export default {
      name: "InformationEntry",
      components: { TitleBar },
      data() {
      return {
        /* 选择身份 */
        identity: '',
        control: '',
        show0: false,
        actions0: [{ name: '业委', control: 'council' }, { name: '居委', control: 'neighborhood' }, { name: '物业管理员', control: 'propertyAdmin' }, { name: '业主', control: 'resident' }],
        /* 选择小区 */
        cellName: '',
        show1: false,
        actions1: [{ name: '阿拉小区' }],
        /* 选择栋、层、号 */
        show2: false,
        cellAddress: '',
        columns: [
          {
            text: '1栋',
            children: [
              {
                text: '1层',
                children: [{ text: '001' }, { text: '002' }]
              },
              {
                text: '2层',
                children: [{ text: '001' }, { text: '002' }]
              }
            ]
          },
          {
            text: '2栋',
            children: [
              {
                text: '1层',
                children: [{ text: '001' }, { text: '002' }]
              },
              {
                text: '2层',
                children: [{ text: '001' }, { text: '002' }]
              }
            ]
          }
        ],
        /* 三个输入型 */
        name: '',
        telephone: '',
        yzm: ''
      }
    },
      methods: {
        onClickLeft() {
          this.$router.go(-1)
        },
        onSelect0(item) {
          // 默认情况下点击选项时不会自动收起
          // 可以通过 close-on-click-action 属性开启自动收起
          this.show0 = false
         /* console.log(item) */
          this.identity = item.name
          this.control = item.control
        },
        onSelect1(item) {
          // 默认情况下点击选项时不会自动收起
          // 可以通过 close-on-click-action 属性开启自动收起
          this.show1 = false
          /* console.log(item) */
          this.cellName = item.name
        },
        onConfirm(value, index) {
            this.cellAddress = ''
          value.forEach((item, index) => {
            this.cellAddress += item
          })
          this.show2 = false
        },
        onCancel() {
          this.show2 = false
        },
        tj() {
          var data = {
            control: this.control,
            cellName: this.cellName,
            cellAddress: this.cellAddress,
            name: this.name,
            telephone: this.telephone,
            yzm: this.yzm
          }
          console.log(data)
        }
      },
      mounted() {
      }
    }
</script>

<style scoped>

</style>
