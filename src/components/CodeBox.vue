<script>
import copyIcon from '@/assets/icons/copy_icon.svg'

export default {
name: 'CodeBox',
props: {
    tabsArr: {
        type: Array,
        required: true,
        default: [
          {
            title: 'HTML',
            content: `
            <div>
            some html...
            </div>`,
          },
          {
            title: 'CSS',
            content: `
              .some-css {
              content: "coding is fun"
              }
              `,
          },
          {
            title: 'JS',
            content: `
              while (coding === true) {
              return "this is awesome"
              }
              `,
          }
          ]
        },
    uid:{
      type: String,
      required: false,
      default: '0'
    },
    width:{
      type: String,
      required: false,
      default: '50vw',
    }
    },
  mounted() {
    document.getElementById(`${this.tabsArr[0].title}-button-${this.uid}`).click();
  },
    data() {
    return {
      currentTab: '',
      copyIcon,
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
        document.getElementById(`${tabName}-button-${this.uid}`).className += " active";
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
<div id="code-box" :style="`width:${width};`">
  <div class="tab" :style="`width:${width};`">
    <button v-for="tab in tabsArr" :id="`${tab.title}-button-${this.uid}`" class="tablinks" @click="openTab(event, `${tab.title}`)">{{tab.title}}</button>
    <button id="copy-button" @click="copyText" ><img :src="copyIcon" class="copy-icon"/></button>
  </div>
  <div v-for="tab in tabsArr" :id="`${tab.title}`" class="tabcontent" :style="`width:${width};`">
    <textarea :id="`${tab.title}-content`" style="white-space:pre-wrap; width: inherit;">
    {{tab.content}}
    </textarea>
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
  font-size: 20px;
  font-weight: 500;
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
  padding: 1px;
  border: 1px solid #fff;
  border-radius: 0px 0px 20px 20px;
  border-top: none;
}

.tabcontent p {
  color: #fff;
  margin: 2rem 0rem 2rem 1rem;
  font-size: 20px;
  font-family: 'Consolas', 'Monaco', 'Courier-New', 'Lucida-Console' !important;
  width: auto;
  max-width: 30vw;
  padding: 10px;
}

.copy-icon {
  height: 1.8rem;
}

textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid transparent;
  border-radius: 4px;
  background-color: #162126;
  color: white;
  font-size: 16px;
  resize: none;
}
</style>