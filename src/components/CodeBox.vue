<script>
import candy from '@/assets/background/candy.jpg'

export default {
name: 'CodeBox',
props: {
    content: {
        type: Object,
        required: true,
        default(rawProps) {
            return {
                    {
                    title: 'London',
                    content: 'London content',
                    },
                }
            }
        },
    },
methods: {
    openCity(evt, cityName) {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
        }
    }
}
</script>

<template>
<div>
<div class="tab">
  <button class="tablinks" @click="openCity(event, 'London')">London</button>
  <button class="tablinks" @click="openCity(event, 'Paris')">Paris</button>
  <button class="tablinks" @click="openCity(event, 'Tokyo')">Tokyo</button>
</div>

<div id="London" class="tabcontent">
  <p>London is the capital city of England.</p>
</div>

<div id="Paris" class="tabcontent">
  <p>Paris is the capital of France.</p> 
</div>

<div id="Tokyo" class="tabcontent">
  <p>Tokyo is the capital of Japan.</p>
</div>

  </div>
</template>
<style lang="scss">
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