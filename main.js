// 该JS脚本是mainView的基础脚本，用于对接mainView基础交互逻辑

cc.Class({
    extends: cc.Component,

    properties: {
        // 节点
        
        // 私有变量
        // 切换图片效果持续时间
        _actionDuration: 1,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    // start () {},

    // update (dt) {},

    // 按钮相关逻辑

    onClickLike(targetNode){
        // 请将targetNode替换为自己项目中的target
        // 请将targetNode替换为自己项目中的target
        // 请将targetNode替换为自己项目中的target
        // 最上层图片向右侧移出，动作具体内容在setAction中
        this.setAction("like", targetNode);
        // 当图片移出之后过(actionDuration*1000+500)ms后，将图片销毁
        setTimeout(() => {
            targetNode.destroy();
        }, this._actionDuration*1000+500);

        // 其他动画效果
        // 数据记录
    },

    onClickReject(targetNode){
        // 请将targetNode替换为自己项目中的target
        // 请将targetNode替换为自己项目中的target
        // 请将targetNode替换为自己项目中的target
        // 最上层图片向右侧移出，动作具体内容在setAction中
        this.setAction("reject", targetNode);
        // 当图片移出之后过(actionDuration*1000+500)ms后，将图片销毁
        setTimeout(() => {
            targetNode.destroy();
        }, this._actionDuration*1000+500);

        // 其他动画效果
        // 数据记录
    },

    onClickRefresh(targetNode){
        // 刷新一批图片
        // alert("刷新成功");

        // 动作具体内容在setAction中
        this.setAction("refresh", targetNode);
        // 文字描述变化

        // 其他动画效果

        // 数据记录
    },

    onClickFavorite(){
        // 请将targetNode替换为自己项目中的target
        // 请将targetNode替换为自己项目中的target
        // 请将targetNode替换为自己项目中的target
        // 最上层图片向右侧移出，动作具体内容在setAction中
        this.setAction("favorite", targetNode);
        // 当图片移出之后过(actionDuration*1000+500)ms后，将图片销毁
        setTimeout(() => {
            targetNode.destroy();
        }, this._actionDuration*1000+500);

        // 其他动画效果
        // 数据记录
    },

    setAction(type, node){
        // moveBy, rotateBy, fadeOut, scaleTo, fadeIn 是cocos的内置动作模式，可以在文档里查看
        // spawn(同步执行), sequence(序列执行) 是cocos内置的动作模式，可以在文档里查看
        // cc.v2(x,y) 中的x, y是对位移距离的设定，可根据自己具体项目的具体情况，进行相关设计
        // cc.v2(x,y) 中的x, y是对位移距离的设定，可根据自己具体项目的具体情况，进行相关设计
        // cc.v2(x,y) 中的x, y是对位移距离的设定，可根据自己具体项目的具体情况，进行相关设计
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
