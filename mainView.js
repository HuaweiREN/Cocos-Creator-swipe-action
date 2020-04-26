// 该JS脚本是mainView的基础脚本，用于对接mainView基础交互逻辑

cc.Class({
    extends: cc.Component,

    properties: {
        // 节点
        mBg: cc.Node,

        mHeader: cc.Node,
        mMenu: cc.Node,
        mFollow: cc.Node,

        mContent: cc.Node,
        mPicPool: cc.Node,
        mTouchArea: cc.Node,
        mPicInfo: cc.Node,
        mTextBuffer: cc.Node,
        mTextNext: cc.Node,
        mTextShow: cc.Node,
        mUserRes: cc.Node,

        mAction: cc.Node,
        mRefresh: cc.Node,
        mReject: cc.Node,
        mLike: cc.Node,
        mFavorite: cc.Node,
        mNew: cc.Node,

        mMenuBar: cc.Node,

        // 私有变量
        // 切换图片效果持续时间
        _actionDuration: 1,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    // start () {},

    // update (dt) {},

    // 按钮相关逻辑
    onClickMenuBar(){
        // 显示menuBar
        this.mMenuBar.active = true;
    },

    onClickGoBack(){
        // 隐藏menuBar
        this.mMenuBar.active = false;
    },

    onClickLike(){
        // picSet选择到picPool中的所有子节点
        // picNew复制最上层节点
        var picSet = this.mPicPool.children;
        var picNew = cc.instantiate(picSet[2]);
        // 最上层图片向右侧移出，动作具体内容在setAction中
        this.setAction("like", picSet[2]);
        // 当图片移出之后过(actionDuration*1000+500)ms后，将图片销毁
        setTimeout(() => {
            let index = picSet.length;
            picSet[index-2].destroy();
        }, this._actionDuration*1000+500);
        // 第二层、第三层图片做相应的位置移动
        picSet[1].x -= 10;
        picSet[1].y += 10;
        picSet[0].x -= 10;
        picSet[0].y += 10;
        // 将复制的节点塞入到最下层节点
        this.mPicPool.insertChild(picNew,0);
        // 调整最下层节点的位置
        picSet[0].x = picSet[1].x + 10;
        picSet[0].y = picSet[1].y - 10;
        // 文字描述变化

        // 其他动画效果

        // 数据记录
    },

    onClickReject(){
        // picSet选择到picPool中的所有子节点
        // picNew复制最上层节点
        var picSet = this.mPicPool.children;
        var picNew = cc.instantiate(picSet[2]);
        // 最上层图片向左侧移出，动作具体内容在setAction中
        console.log("0", this.mPicPool.children);
        // 当图片移出之后过(actionDuration*1000+500)ms后，将图片销毁
        setTimeout(() => {
            let index = picSet.length;
            picSet[index-2].destroy();
        }, this._actionDuration*1000+500);
        // 第二层、第三层图片做相应的位置移动
        picSet[1].x -= 10;
        picSet[1].y += 10;
        picSet[0].x -= 10;
        picSet[0].y += 10;
        // 将复制的节点塞入到最下层节点
        this.mPicPool.insertChild(picNew,0);
        // 调整最下层节点的位置
        picSet[0].x = picSet[1].x + 10;
        picSet[0].y = picSet[1].y - 10;
        // 文字描述变化

        // 其他动画效果

        // 数据记录
    },

    onClickRefresh(){
        // 刷新一批图片
        // alert("刷新成功");
        var picSet = this.mPicPool;
        // 动作具体内容在setAction中
        this.setAction("refresh", picSet);
        // 文字描述变化

        // 其他动画效果

        // 数据记录
    },

    onClickFavorite(){
        // 最喜爱一张图片
        //alert("最喜爱成功");
        // picSet选择到picPool中的所有子节点
        // picNew复制最上层节点
        var picSet = this.mPicPool.children;
        var picNew = cc.instantiate(picSet[2]);
        // 最上层图片向上侧移出，动作具体内容在setAction中
        this.setAction("favorite", picSet[2]);
        // 当图片移出之后过(actionDuration*1000+500)ms后，将图片销毁
        setTimeout(() => {
            let index = picSet.length;
            picSet[index-2].destroy();
        }, this._actionDuration*1000+500);
        // 第二层图片移动至最上层图片位置
        picSet[1].x -= 10;
        picSet[1].y += 10;
        picSet[0].x -= 10;
        picSet[0].y += 10;
        // 将复制的节点塞入到最下层节点
        this.mPicPool.insertChild(picNew,0);
        // 调整最下层节点的位置
        picSet[0].x = picSet[1].x + 10;
        picSet[0].y = picSet[1].y - 10;
        // 文字描述变化

        // 其他动画效果

        // 数据记录
    },

    onClickNew(){
        cc.director.loadScene("myCanvas");
        // 切换到我的画室
        alert("切换到我的画室");
    },

    onClickFollow(){
        // 关注一个作者
        alert("关注成功！");
    },

    setAction(type, node){
        // moveBy, rotateBy, fadeOut, scaleTo, fadeIn 是cocos的内置动作模式，可以在文档里查看
        // spawn(同步执行), sequence(序列执行) 是cocos内置的动作模式，可以在文档里查看

        var move1 = cc.moveBy(this._actionDuration, cc.v2(1000,0));
        var move2 = cc.moveBy(this._actionDuration,cc.v2(-1000,0));
        var rot1 = cc.rotateBy(this._actionDuration, 90);
        var rot2 = cc.rotateBy(this._actionDuration, -90);
        var fade1 = cc.fadeOut(this._actionDuration);

        var compress1 = cc.scaleTo(this._actionDuration/4, 1.2, 0.8);
        var compress2 = cc.scaleTo(this._actionDuration/4, 0.5, 2.0);
        var move3 = cc.moveBy(this._actionDuration/2, cc.v2(0,1000));

        var rot3 = cc.rotateBy(this._actionDuration/4, 360);
        var fade2 = cc.fadeOut(this._actionDuration/4);
        var compress3 = cc.scaleTo(this._actionDuration/4, 0.01, 0.01);
        var fade3 = cc.fadeIn(this._actionDuration/4);
        var compress4 = cc.scaleTo(this._actionDuration/4, 1, 1);
        
        var set1 = cc.spawn(move1, rot1, fade1);
        var set2 = cc.spawn(move2, rot2, fade1);
        var set3 = cc.sequence(compress1, cc.spawn(compress2, move3));
        var set4 = cc.sequence(
            cc.spawn(rot3, fade2, compress3),
            rot3,
            rot3,
            cc.spawn(rot3, fade3, compress4),
        )

        // runAction是cocos内置的动作函数，可以实现上述动作
        if (type == "like"){
            node.runAction(set1);
        } else if (type == "reject"){
            node.runAction(set2);
        } else if (type == "favorite"){
            node.runAction(set3);
        } else if (type == "refresh"){
            node.runAction(set4);
        }
    }

});
