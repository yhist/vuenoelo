<template>
  <div class="mb-div">
    <div class="mb-bg">
      <div class="mb-top">
        <span class="mb-top-txt">로그인이 필요합니다</span>
        <a href="#" class="login">LOGIN</a>
        <button class="mb-close"></button>
      </div>
      
      <div class="mb-wrap">
        <ul class="mb-menu">
          <li v-for="(item, index) in mbmenu" v-bind:key="index">
            <span class="mb-mainmenu" v-if="item.menuType == 'S'">{{item.mainText}}</span>
            <a v-bind:href="item.mainLink" class="mb-mainmenu" v-if="item.menuType == 'A'">{{item.mainText}}</a>

            <ul class="mb-submenu" v-if="item.menuType == 'S'">
              <li v-for="(subitem, subindex) in item.subArr" :key="subindex">
                <a :href="subitem.link">{{subitem.title}}</a>
              </li>
            </ul>

          </li>
          <li>
            <span href="#" class="mb-mainmenu">SHOP</span>
            <ul class="mb-submenu">
              <li><a href="#">ALL PRODUCTS</a></li>
              <li><a href="#">NEWBORN</a></li>
              <li><a href="#">BABY</a></li>
              <li><a href="#">FAMILY</a></li>
              <li><a href="#">BATH GOODS</a></li>
              <li><a href="#">PRESENTS</a></li>
            </ul>
          </li>
          <li>
            <span href="#" class="mb-mainmenu">ABOUT</span>
            <ul class="mb-submenu">
              <li><a href="#">BRAND STORY</a></li>
              <li><a href="#">WHO WE ARE</a></li>
              <li><a href="#">NAKE A WISH</a></li>
              <li><a href="#">PRESS</a></li>
            </ul>
          </li>
          <li>
            <span href="#" class="mb-mainmenu">TRUST</span>
            <ul class="mb-submenu">
              <li><a href="#">FOOD GRADE</a></li>
              <li><a href="#">PENTACERA</a></li>
              <li><a href="#">BABY SKINCARE</a></li>
              <li><a href="#">CERTIFICATIONS</a></li>
              <li><a href="#">INGREDIENT</a></li>
            </ul>
          </li>
          <li>
            <a href="#" class="mb-mainmenu">STOCKISTS</a>
          </li>
          <li>
            <a href="#" class="mb-mainmenu">REVIEW</a>
          </li>
          <li>
            <span href="#" class="mb-mainmenu">BENEFITS</span>
            <ul class="mb-submenu">
              <li><a href="#">EVENTS</a></li>
              <li><a href="#">MEMBERS</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { computed, onUpdated } from 'vue';
  import $ from 'jquery';
  import {useStore} from 'vuex';

  export default {

    setup() {
      // vuex에 기능을 사용하기 위해서 참조 객체를 만든다.
      // 현재는 store변수를 통해서 접근하여 기능을 실행한다.
      const store = useStore();
      // store의 state(데이터)s는 수시로 변경되므로 computed로 감시한다.      
      const mbmenu = computed(() => store.getters.getMbMenuData );
      // store의 action호출
      // store.dispatch('액션메소드') ->  app에서 한번만 날림


      // 화면에 html 의 구성이 완료되면
      onUpdated(() => {
        // 모바일 메뉴
        let mb_div = $('.mb-div');

        // 모바일 보기 버튼 기능
        let mb_bt = $('.mb-bt');
        mb_bt.click(function () {
          mb_div.show();
        });
        // 모바일 닫기 버튼 기능
        let mb_close = $('.mb-close');
        mb_close.click(function () {
          mb_div.hide();
        });

        // 배경 누르면 닫기
        mb_div.click(function () {
          mb_div.hide();
        });

        // 내용을 클릭하면 배경 신호 전달 막기
        $('.mb-bg').click(function (event) {
          // 신호 전달 막기
          event.stopPropagation();
        });


        // 모바일 메뉴 기능
        let mb_menu_li = $(' .mb-menu > li ');
        $.each(mb_menu_li, function (index) {
          // mb-mainmenu 를 찾아서 보관
          let temp = $(this).find('.mb-mainmenu');
          temp.click(function () {
            // 펼쳐져 있는 경우 true, 없으면 false
            let result = temp.hasClass('mb-mainmenu-open');

            if (result == true) {
              // 펼쳐진 클래스 가진 경우
              temp.removeClass('mb-mainmenu-open');
              // 펼쳐진 서브 메뉴 닫기
              mb_menu_li.find('.mb-submenu').hide();

            } else {
              // 모든 클래스를 일단 제거한다.
              mb_menu_li.find('.mb-mainmenu').removeClass('mb-mainmenu-open');
              // 모든 펼쳐진 서브메뉴를 닫는다.
              mb_menu_li.find('.mb-submenu').hide();

              // 펼쳐진 클래스 없는 경우
              temp.addClass('mb-mainmenu-open');
              // 서브메뉴 펼치기
              mb_menu_li.eq(index).find('.mb-submenu').show();
            }
          });
        });
        // window 너비 체크
        $(window).resize(function () {
          let temp = $(window).width();
          if (temp >= 880) {
            mb_div.hide();
            $('.mb-mainmenu').removeClass('mb-mainmenu-open');
            $('.mb-submenu').hide();
          }
        });
      });

      return {mbmenu}
    }
  }
</script>

<style>
  /* 모바일 메뉴 */
  .mb-div {
    position: fixed;
    left: 0;
    top: 0;
    display: none;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 99999;
  }

  .mb-div .mb-bg {
    position: relative;
    width: 380px;
    height: 100%;
    padding: 0 30px;
    background-color: #fff;
  }

  .mb-div .mb-top {
    position: relative;
    display: block;
    width: 320px;
    padding-top: 35px;
    padding-bottom: 20px;
    margin-bottom: 35px;
    border-bottom: 1px solid #dcdcdc;
  }

  .mb-div .mb-top .mb-top-txt {
    position: relative;
    display: block;
  }

  .mb-div .mb-top .login {
    position: relative;
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    color: #ffcc00;
    margin-top: 15px;
  }

  .mb-div .mb-top .mb-close {
    position: absolute;
    right: 0px;
    top: 70px;
    display: block;
    width: 20px;
    height: 20px;
    background: url("@/assets/images/btn-close.png") no-repeat center;
    background-size: contain;
    border: 0;
    cursor: pointer;
  }

  .mb-div .mb-wrap {
    position: relative;
    display: block;
    width: 320px;
  }

  .mb-div .mb-wrap .mb-menu {
    position: relative;
    display: block;
  }

  .mb-div .mb-wrap .mb-menu>li {
    position: relative;
    display: block;
    margin-bottom: 25px;
  }

  .mb-div .mb-wrap .mb-mainmenu {
    position: relative;
    display: block;
    font-size: 16px;
    font-weight: 500;
    color: #777;
    margin-bottom: 15px;
    cursor: pointer;
  }

  .mb-div .mb-wrap .mb-mainmenu::after {
    content: "";
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    background: url("@/assets/images/ico-gnb-link-m.png") no-repeat 100%;
    background-size: contain;
  }

  .mb-div .mb-wrap .mb-mainmenu-open {
    color: #ffcc00;
  }

  .mb-div .mb-wrap .mb-mainmenu-open::after {
    background: url("@/assets/images/ico-gnb-m-active-up.png") no-repeat 100%;
    background-size: contain;
  }

  .mb-div .mb-wrap .mb-submenu {
    position: relative;
    display: none;
  }

  .mb-div .mb-wrap .mb-submenu li {
    position: relative;
    display: block;
    padding-left: 20px;
    margin-bottom: 16px;
  }

  .mb-div .mb-wrap .mb-submenu li a {
    position: relative;
    display: block;
    font-size: 14px;
  }
</style>