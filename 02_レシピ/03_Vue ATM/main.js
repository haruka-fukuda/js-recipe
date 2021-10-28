new Vue({
  el: "#app1",
  data: {
    nyuryokugaku: "",
    zandaka: 0,
    logs: [
      {
        date: new Date("2021-07-23T12:00:00"),
        type: "入金",
        money: 1000,
      },
      {
        date: new Date("2021-07-23T13:00:00"),
        type: "出金",
        money: 1000,
      },
    ],
  },

  methods: {
    nyuukin: function() {
      this.zandaka += this.nyuryokugaku
      const now = new Date()

      this.logs.push({ date: now, type: "入金", money: this.nyuryokugaku })
    },
    shukkin: function() {
      this.zandaka -= this.nyuryokugaku
      const now = new Date()
      this.logs.push({ date: now, type: "出金", money: this.nyuryokugaku })
    },
  },
})
