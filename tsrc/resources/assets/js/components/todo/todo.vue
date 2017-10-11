<template>
    <div class="ui vertical menu">
        <a class="teal item active">
            Inbox
            <div class="ui teal left pointing label">1</div>
        </a>
        <a class="item">
            Spam
            <div class="ui label">51</div>
        </a>
        <a class="item">
            Updates
            <div class="ui label">1</div>
        </a>
        <div class="item">
            <div class="ui transparent icon input">
                <input type="text" placeholder="Search mail...">
                <i class="search icon"></i>
            </div>
        </div>
    </div>
</template>
<style>
    body{

    }
</style>
<script>
  //  import HeaderComponent from './components/header.vue'

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        ready(){
            console.log('afsdfdsa');
        }

    }
</script>
