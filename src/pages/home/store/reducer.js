import { fromJS } from 'immutable';
import articlePic from '../../../statics/banner.png';
import recommendPic from '../../../statics/recommend_pic.png';
import recommendPic2 from '../../../statics/recommend_pic2.png';
import recommendPic3 from '../../../statics/recommend_pic3.png';
import recommendPic4 from '../../../statics/recommend_pic4.png';
import headImage from '../../../statics/writer_headimg.webp';
import headImage2 from '../../../statics/writer_headimg2.webp';
import headImage3 from '../../../statics/writer_headimg3.webp';
import headImage4 from '../../../statics/writer_headimg4.webp';
import headImage5 from '../../../statics/writer_headimg5.webp';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl: 'https://pic.cnblogs.com/face/1538950/20210130181918.png'
    }, {
        id: 2,
        title: '手工',
        imgUrl: ''
    },{
        id: 3,
        title: '社会热点',
        imgUrl: 'https://pic.cnblogs.com/face/1538950/20210130181918.png'
    }, {
        id: 4,
        title: '手工粘土',
        imgUrl: ''
    }, {
        id: 5,
        title: '热点',
        imgUrl: 'https://pic.cnblogs.com/face/1538950/20210130181918.png'
    }, {
        id: 6,
        title: '手工粘土',
        imgUrl: ''
    }],
    articleList: [{
        id: 1,
        title: '戴望舒——在最美的时光里错过',
        desc: '【青•故事优选】[https://www.jianshu.com/c/11c8f8761ed1]专题推荐文章 01 撑着油纸伞，独自彷徨在悠长，...'
    }, {
        id: 2,
        title: '香港情侣在5平米廉租房的一幕，撕开了穷人最心酸的遮羞布',
        desc: '01 前几天看了一篇报道，记录了香港一对年轻情侣，挤住在5平米房间里生活的场景。 5平米什么概念？普通人家的厕所都比这要宽敞，而她们却要在这里夹...',
        imgUrl: articlePic
    }, {
        id: 3,
        title: '生死恋',
        desc: '结婚前一天，我被退婚了，妈妈气的大骂，父亲叫了哥哥去讨说法，我，万念俱灰，不吃不喝躺了三天。 我想不明白，好好的，婚纱照拍了，请帖发了，喜宴定了...'
    }, {
        id: 4,
        title: '中年夫妻就不要轻易温存了',
        desc: '早上五六点突然醒了一下，难得的假期实在不想早起还是闭上眼睛继续睡觉，这时候老郝感受到我的苏醒后一把把我揽到了怀里。 迷糊的我突然感受到了温暖，瞬...'
    }],
    recommendList: [{
        id: 1,
        imgUrl: recommendPic
    }, {
        id: 2,
        imgUrl: recommendPic2
    }, {
        id: 3,
        imgUrl: recommendPic3
    }, {
        id: 4,
        imgUrl: recommendPic4
    }],
    writerList: [{
        id: 1,
        name: '高哥',
        writtingNum: 12.3,
        likeNum: 3,
        headImage: headImage
    }, {
        id: 2,
        name: '张懒猪',
        writtingNum: 12.5,
        likeNum: 3.4,
        headImage: headImage2
    }, {
        id: 3,
        name: '李莫愁',
        writtingNum: 14.2,
        likeNum: 9.8,
        headImage: headImage3
    }, {
        id: 4,
        name: '招牌菜',
        writtingNum: 7.7,
        likeNum: 9.1,
        headImage: headImage4
    }, {
        id: 5,
        name: '碗碗腔',
        writtingNum: 12.3,
        likeNum: 3.6,
        headImage: headImage5
    }]
})

export const reducer = (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state
    }
}