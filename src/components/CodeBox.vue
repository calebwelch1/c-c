<script>
import candy from '@/assets/background/candy.jpg'

export default {
name: 'CodeBox',
props: {
    tabsArr: {
        type: Array,
        required: true,
        default: [
          {
            title: 'London',
            content: 'The Capital of England',
          },
          {
            title: 'Tokyo',
            content: 'The Capital of Japan',
          },
          {
            title: 'Madrid',
            content: 'The Capital of Spain',
          
          }
          ]
        },
    },
  mounted() {
    document.getElementById(`${this.tabsArr[0].title}-button`).click();
  },
    data() {
    return {
      currentTab: '',
    }
  },
  methods: {
    openTab(evt, tabName) {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        document.getElementById(`${tabName}-button`).className += " active";
        this.currentTab = tabName;
        },
    copyText() {
        let text = document.getElementById(`${this.currentTab}-content`);
        navigator.clipboard.writeText(text.innerHTML);
      },
    }
}
</script>

<template>
<div id="code-box">
  <div class="tab">
    <button v-for="tab in tabsArr" :id="`${tab.title}-button`" class="tablinks" @click="openTab(event, `${tab.title}`)">{{tab.title}}</button>
    <button id="copy-button" @click="copyText" >copy!</button>
  </div>
  <div v-for="tab in tabsArr" :id="`${tab.title}`" class="tabcontent">
    <p :id="`${tab.title}-content`">
    {{tab.content}}
    </p>
  </div>
</div>
</template>
<style lang="scss">
#code-box {
  margin: 15px;
  width: auto;
}
.tab {
  overflow: hidden;
  position: relative;
  border: 1px solid #fff;
  border-radius: 20px 20px 0px 0px;
  background-color: #f1f1f1;
}

#copy-button {
  position:absolute;
  right: 0rem;
}

.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}

.tab button:hover {
  background-color: #ddd;
}

.tab button.active {
  background-color: #ccc;
}

.tabcontent {
  display: none;
  background-color: #162126;
  padding: 6px 12px;
  border: 1px solid #fff;
  border-radius: 0px 0px 20px 20px;
  border-top: none;
}

.tabcontent p {
  color: #fff;
  margin: 2rem;
  font-size: 20px;
}
</style>