import { fromJS } from 'immutable';

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
    }]
})

export const reducer = (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state
    }
}