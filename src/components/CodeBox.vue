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
        evt.currentTarget.className += " active";
        }
    }
}
</script>

<template>
<div id="code-box">
  <div class="tab">
    <button v-for="tab in tabsArr" class="tablinks" @click="openTab(event, `${tab.title}`)">{{tab.title}}</button>
  </div>
  <div v-for="tab in tabsArr" :id="`${tab.title}`" class="tabcontent">
    <p>
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
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons inside the tab */
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

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
</style>