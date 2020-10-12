<template>
  <div class="listContainer" @click="toSearch">
    <div class="first" v-for="(c1,index) in cateGoryList" :key="c1.categoryId">
      <h3>
        <a
          class="yj"
          href="javascript:;"
          :data-categoryName="c1.categoryName"
          :data-category1Id="c1.categoryId"
        >{{c1.categoryName}}</a>
      </h3>
      <div class="item-list" v-for="(c2,index) in c1.categories" :key="c2.categoryId">
        <a
          class="cccc"
          href="javascript:;"
          :data-categoryName="c2.categoryName"
          :data-category2Id="c2.categoryId"
        >{{c2.categoryName}}</a>

        <div class="item-list-a" v-for="(c3,index) in c2.categories" :key="c3.categoryId">
          <a
            class="dddd"
            href="javascript:;"
            :data-categoryName="c3.categoryName"
            :data-category3Id="c3.categoryId"
          >{{c3.categoryName}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import throttle from 'lodash/throttle'
export default {
  name: 'ListContainer',
  props: ['cateGoryList'],
  data() {
    return {
      currentIndex: -1, //移入下标的时候初始值
      // isShow: true,
    }
  },
  mounted() {
    if (this.$route.path !== '/home') {
      this.isShow == false
    }
  },
  methods: {
    moveIn: throttle(
      function (index) {
        // console.log(index)
        this.currentIndex = index
      },
      30,
      { trailing: false }
    ),
    //点击跳转到search页 带上三级列表的参数
    toSearch(event) {
      //拿到目标元素的自定义属性组成的对象
      let {
        categoryname,
        category1id,
        category2id,
        category3id,
      } = event.target.dataset
      if (categoryname) {
        //点击的就是a标签
        let location = {
          name: 'search',
        }
        let query = {
          categoryName: categoryname,
        }
        if (category1id) {
          query.category1Id = category1id
        } else if (category2id) {
          query.category2Id = category2id
        } else {
          query.category3Id = category3id
        }
        //收集参数完毕
        location.query = query

        //要考虑带上params参数
        if (this.$route.params) {
          location.params = this.$route.params
        }
        //优化
        if (this.$route.path !== '/home') {
          this.$router.replace(location)
        } else {
          this.$router.push(location)
        }
      }
    },
  },
}
</script>

<style lang="less" scoped>
.listContainer {
  border-radius: 10px;
  width: 200px;
  height: 556px;
  background-color: rgb(255, 255, 255);
}
.listContainer .first {
  border-radius: 10px;
  width: 100%;
  height: 34.33px;
  line-height: 34px;
  text-indent: 20px;
  padding-right: 5px;
  padding-top: 0.2px;
  font-size: 14px;
}
.listContainer .first a {
  width: 100%;
  color: #666666;
  font-size: 12px;
  font-weight: 400;
}

.listContainer .first:hover {
  background-color: #eee;
}
.listContainer .first:hover a.yj {
  color: pink;
}
.listContainer .first .item-list:hover a.ej {
  color: pink;
}
.listContainer .first .item-list-a:hover a.sj {
  color: pink;
}

.listContainer .first .item-list {
  display: none;
  position: absolute;
  border-radius: 10px;
  width: 600px;
  height: 560px;
  background: rgb(255, 255, 255);
  left: 200px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  top: 0;
  z-index: 9999 !important;
}
.listContainer .first:hover .item-list {
  display: block;
}
.listContainer .first .item-list {
  background-color: #fff;
}
</style>