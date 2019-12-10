namespace app {
        export let t = {
                GAME_NAME: "猎空战机",
                // C代表通用消息分组(登录消息)
                C_USER_AGREEMENT: `尊敬的用户，您需要阅读并同意用户协议才能登陆游戏。请您勾选"已阅读并同意《用户协议》"，表示您已经阅读并同意用户协议。`,
                C_START_GAME_ERROR: '服务器访问失败，请稍后重试',
                C_START_GAME_ERROR_RETRY: '服务器访问失败，是否尝试重新连接?',
                C_SERVER_IN_MAINTENANCE: '服务器维护中，请稍后再试',
                C_NOT_ENOUGH_GOLD: '没有足够金币',
                C_DISCONNECT_ERROR: '您与服务器断开连接，请稍后重试',
                C_DISCONNECT_ERROR_RETRY: '您与服务器断开连接，是否尝试重新连接?',
                C_ACCOUNT_ERROR: '账号或密码错误！',
                C_DOLPHIN_ERROR: "<span style='color:#dbdbdb'>{0}，更新出错了！</span><br/><span style='color:#dbdbdb'>您是否要尝试继续更新？</span>",
                C_DOLPHIN_NOTICE_INSTALL_APK: '\ \ \ \ \ \ 请退出游戏重新启动',
                C_BRANCH_NOTICE_RES_OK: '\ \ \ \ 更新完成,点击确定重新启动游戏',
                C_LOGIN_SUCCESS: '登录授权成功',
                C_LOGIN_AUTHROZE_FAIL: '登录授权失败,请重新登陆！',
                C_USER_LOGIN_PERMISSION: '请勾选同意下方的服务协议，即可进入游戏哦',
                C_SOCKET_TIMEOUT: "网络不佳，请检查网络后重试。",
                C_LOAD_ERROR: "加载出错！请重新登录。",
                C_DISCONNECT: "您已断线!请重新连接",
                C_SERVER_FULL: "当前服角色创建数量已达上限,请前往其他服登录",
                C_SERVER_MAINTENANCE: "服务器正在例行维护中,请稍后",
                C_SERVER_UNOPEN: "服务器未开启,请稍后",
                C_NET_TIMEOUT: "网络请求超时！",
                C_LOGIN_FAIL: "登陆失败",
                C_TRY_AGAIN: "重试",
                C_GAME_TITLE: "猎空战机",
                C_ENTERGAME_TITLE: "enterGame 失败",
                C_SYSTEM_ERROR: "系统错误",
                C_MODULE_UNOPEN: "功能暂未开放!",
                C_ENTERGAME_ERROR: "连接错误，请清理缓存后再次尝试，如依然无法登录，请联系QQ：800098876。",

                NAME_LENGTH_ILLEGAL: "昵称最少3个字符，请重新命名",
                OPERATE_TOOFAST: "您操作太快了！",
                WARN_LOGOUT: "您确定注销该账号重新登录?",
                NO_SKILL_MSG: "当前无技能",
                NO_ITEMS: "物品不足",
                NETSTATUS_PLAY_VIDEO: "当前网络为%sG,是否播放美人视频?",

                REFRESH_SUCCESS: "刷新成功",

                PRODUCE_USE: "<span style='color:#ffffff'>无法使用.</span><span style='color:#ffc000'>已使用生产加速中</span>",
                PRODUCE_SUCCESS: "加速成功",
                PRODUCE_LOSE: "加速失败",
                BREAK_TIMES: "突破次数不足",
                ADD_BREAK_TIMES: "请在研究所中提升[立即突破]上限",
                APPEND_REWARD: "追加奖励",
                STAGE_REWARD: "进度%s 最初突破奖励！",
                DRAGON_CODE_1: "一般战机",
                DRAGON_CODE_2: "   高级战机",
                DRAGON_CODE_3: "修改队伍",
                DRAGON_CODE_4: "完成",
                DRAGON_CODE_5: "全体",
                DRAGON_CODE_6: "和平",
                DRAGON_CODE_7: "战争",
                DRAGON_CODE_8: "海洋",
                DRAGON_CODE_9: "荒野",
                DRAGON_CODE_10: "队",
                DRAGON_CODE_11: "队除外",
                DRAGON_CODE_12: "依战斗力高排序",
                DRAGON_CODE_13: "依战斗力低排序",
                DRAGON_CODE_14: "依稀珍等级高排序",
                DRAGON_CODE_15: "依稀珍等级低排序",
                DRAGON_CODE_16: "依等级高排序",
                DRAGON_CODE_17: "依等级低排序",
                DRAGON_CODE_18: "依获得日排序_最新",
                DRAGON_CODE_19: "依获得日排序_较久",
                DRAGON_CODE_20: "已获得",
                DRAGON_CODE_21: "未获得",
                DRAGON_CODE_22: "   碎片",

                DRAGON_WARN_1: "已达最高星级！",
                DRAGON_WARN_2: "进化材料不足!",
                DRAGON_WARN_3: "金币不足!",
                DRAGON_WARN_4: "达到%s级解锁!",
                DRAGON_WARN_5: "上阵已满!",
                DRAGON_WARN_6: "战机不足",
                DRAGON_WARN_7: "不足!",
                DRAGON_WARN_8: "是否前往研究所，增加高级战机出战数？",
                DRAGON_WARN_9: "尚未获得该机甲！",
                DRAGON_WARN_10: "已达当前最大等级，提升星级可解锁限制",
                DRAGON_WARN_11: "您的战机数量较少，暂不能回收",

                //button
                BUTTON_EVOLVE: "进化",
                BUTTON_LEVEL_UP: "升级",
                BUTTON_UNLOCK: "解锁",
                BUTTON_GO: "前往",


                //common
                GET_REWARD: "领取奖励",
                GET_REWARD2: "获得奖励",
                CURRENCY_NOT_ENOUGH: "货币不足",
                ITEM_NOT_ENOUGH: "%s不足!",
                MODULE_OPEN_TIPS: "指挥官等级达到%s级后开启！",
                CONFIRM: "确认",
                ALREADY_GET: "已领取",
                GET_GIFT: "领取礼包",
                GO_TO_RECHARGE: "前往充值",
                RECHARGE: "充值",
                GET: "领取",
                JACKPOT_TIP: "<span style='color:#ffffff;font-size:22px'>已累计</span><span style='color:#83f287;font-size:22px'>%s</span><span style='color:#ffffff;font-size:22px'>关</span><span style='color:#83f287;font-size:22px'>（%s%）</span><span style='color:#ffffff;font-size:22px'>最大%s关</span>",
                JACKPOT_TIP2: "<span style='color:#ffffff;font-size:36px'>您当前暂未获得</span><span style='color:#83f287;font-size:36px'>金币</span><span style='color:#ffffff;font-size:36px'>或</span><span style='color:#83f287;font-size:36px'>强化石</span>",
                //title
                TITLE_TIP: "title.d/img_2j_ts.png",//提示

                //shop
                SHOP_TITLE: "shop/img_title%s.png",
                SHOP_ORIGINAL_PRICE: "<span style='color:#ffffff;font-size:22px'>原价:</span><span style='color:#fc7465;font-size:22px'>%s元</span>",
                SHOP_ITEM_TITLE: "只能购买%s次",
                SHOP_RMB: "%s元",

                //sevenday
                DAY_SKIN: "sevenday/%s.png",
                REWARD_BG_NORAML: "sevenday/img_7.png",
                REWARD_BG_7: "sevenday/img_bg.png",

                SEVEN_DAY_DESC1: "<span style='color:#83f287;font-size:26px'>VIP2</span><span style='color:#FFFFFF;font-size:26px'>及以上可</span><span style='color:#83f287;font-size:26px'>免广告</span><span style='color:#ffffff;font-size:26px'>领取2次奖励</span>",
                SEVEN_DAY_DESC2: "<span style='color:#83f287;font-size:26px'>VIP2</span><span style='color:#FFFFFF;font-size:26px'>及以上可领取</span><span style='color:#83f287;font-size:26px'>2次</span><span style='color:#ffffff;font-size:26px'>奖励</span>",

                //dailyboss
                BOSS_ACTIVE: "dailyboss/img_boss%s_active.png",
                BOSS_INACTIVE: "dailyboss/img_boss%s_inactive.png",
                BOSS_TYPE_SKIN: "dailyboss/img_bg%s.png",
                BOSS_WARN_1: "挑战次数不足！",
                BOSS_WARN_2: "上阵数不足，请修改上阵队伍!",
                BOSS_WARN_3: "完成后续关卡，可使用此功能!",
                BOSS_WARN_4: "您的队伍战力可以达到更高：%s，是否前往修改阵容？",
                BOSS_WARN_5: "取消修改",
                BOSS_WARN_6: "确认修改",
                BOSS_WARN_7: "今日剩余次数不足",

                //backreward
                BACK_LASTTIME: "剩余时间:HH:MM:ss",
                BACK_JUMP_STAGE: "关卡 ",
                BACK_CHOSSE_STAGE: "所选星球",
                BACK_STAGE_LOCK_WARN: "指挥官等级不足！",
                BACK_STAGE_LOCK_WARN_1: "未开启！",
                BACK_STAGE_NOT_OPEN: "尚未开启",
                BACK_STAGE_OPEN_LEVEL: "通过%s%s关开启",

                AUTO_PLAY: "自动游戏中...",
                //mailbox
                MAIL_GETREWARD_TIME: "接收日期:",
                MAIL_LASTTIME: "D天HH时MM分",
                MAIL_WARN_MAX_PLANE: "上阵战机数量已满！",
                MAIL_WARN_NULL: "无可领取邮件！",


                //playerinfo
                PLAYERINFO_CHANGE_NAME_DESC: "要使用钻石更换指挥官名称吗？",
                PLAYERINFO_CHANGE_NAME_CONFING: "确定要使用目前输入的名称吗？",
                PLAYERINFO_CHANGE_NAME_WARN: "请输入3到7个字符！(中英文或数字)",

                //search
                SEARCH_WARN_1: "还有可以进行招募的机会，确定要再次进行探索吗？",
                SEARCH_WARN_2: "存在高级机甲尚未成功招募，确定要再次进行探索吗？",
                SEARCH_WARN_3: "已有探索劵尚未使用！",
                SEARCH_WARN_4: "存在高级基因药剂尚未获取，确定要再次进行探索吗？",
                SEARCH_WARN_5: "购买成功，可到基因界面查看！",
                SEARCH_WARN_6: "确定购买尚未购买的所有基因药剂吗？",


                //背景图后缀  背景图类型， 背景图左右0代表左1代表右  背景图索引  例如1/0_0  表示1文件夹 左边第1张图
                BG_IMG_SUFFIX: "%s/%s_%s.jpg",
                //云层后缀
                CLOUD_IMG_SUFFIX: "%s/%s_%s.png",
                //高级龙激活
                HIGHER_DRAGON_ACTIVE: "home/img_highplane_active.png",
                HIGHER_DRAGON_ACTIVE1: "home/img_highplane%s.png",

                //高级龙未激活
                HIGHER_DRAGON_INACTIVE: "home/img_highplane_inactive.png",
                //低级龙激活
                LOWER_DRAGON_ACTIVE: "home/img_lowerplane_active.png",
                //低级龙未激活
                LOWER_DRAGON_INACTIVE: "home/img_lowerplane_inactive.png",

                FORMULATYPE1: "十代战机+十代战机",
                FORMULATYPE2: "十代战机+王牌十代战机",
                FORMULATYPE3: "王牌十代战机+王牌十代战机",


                PURCHASE_SUCCESS_TIP: "购买成功，请到邮件查收！",

                REWARD_TITLE: "获得奖励",
                TOUCH_REWARD: "点击宝箱领取奖励",

                //onlineReward
                OL_TIME_FOMAT: "MM:ss",


                //sdk
                SHARE_MSG1: "分享成功, 奖励已发放",
                SHARE_MSG2: "分享内容不可为空",
                SHARE_MSG3: "确定是否创建桌面快捷方式",
                SHARE_MSG4: "保存成功,对应奖励已通过邮件发送",
                SHARE_MSG5: "内容分享成功",
                SHARE_MSG6: "内容分享失败",
                SDK_MSG7: "关注成功,对应奖励已通过邮件发送",
                SDK_MSG8: "认证成功,对应奖励已通过邮件发送",
                SDK_MSG9: "下载成功,对应奖励已通过邮件发送",
                SDK_MSG10: "绑定成功,对应奖励已通过邮件发送",
                SDK_MSG11: "该平台不支持绑定",
                SDK_MSG12: "该账号已绑定",
                SDK_MSG13: "广告加载中请耐心等待!",
                SDK_MSG14: "下载微端",
                SDK_MSG15: "收藏游戏",
                SDK_MSG16: '萌妹求合体一起打飞机',
                SDK_MSG17: "不支持此功能",
                SDK_MSG18: "复制失败!",
                SDK_MSG19: "广告加载超时,请检查网络!",
                SDK_MSG20: "广告提前关闭!",
                SDK_MSG21: "广告错误!",
                SDK_MSG23: "无该类型广告!",
                SDK_MSG24: "无可用广告!",
                SDK_MSG25: "广告加载频繁，请一分钟后再试!",


                //login
                USER_PROTOCOL_MSG_1: "请勾选同意下方的用户协议和隐私保护指引即可进入游戏哦",

                MISS_TIME_OUT: "关卡超时",
                MISS_TIME_OUT1: "超过限制时间",
                MISS_TIME_OUT2: "挑战超时",
                MISS_LOSE: "关卡失败",
                MISS_LOSE_1: "挑战失败",
                ALL_DIE: "我军全灭",
                MISS_SUCCESS: "进度突破",
                MISS_SUCCESS_1: "挑战成功",

                //offline
                OFFLINE_STAGE: "关卡",

                //fight
                FIGHT_CODE_1: "自动合成",
                FIGHT_CODE_2: "进化至第s%阶段",
                FIGHT_CODE_3: "消失动画目标不存在",
                FIGHT_CODE_4: "自动托管",
                FIGHT_CODE_5: "自动合成",
                FIGHT_CODE_6: " 出战二代机",
                FIGHT_CODE_7: " 进化2次",


                STAGE_BOSS: "超级首领怪物现身，请做好准备！",

                UPGRADE_PLANE: "点击按钮,升级飞机",
                UPGRADE_ELITE_PLANE: "长按按钮, 快速升级机甲",
                STRENTH_ELITE_PLANE: "点击按钮, 强化机甲",
                STRENTH_ELITE_PLANE1: "长按按钮, 快速强化机甲",

                NICK_NAME: "昵称:%s",
                USER_ID: "用户ID:%s",

                ESSENCE_LESS: "基因药水不足",
                ESSENCE_DES: "请在下方选择基因药剂",
                ESSENCE_GET: "还未获取基因药剂",
                ESSENCE_SUCCEED: "升级成功",

                COLLECT_GUIDE: "添加游戏到桌面",

                Back_GUIDE1: "选择“蓝星”继续游戏",
                Back_GUIDE2: "选择“火星”继续游戏",
                PLANET_DES: "      茫茫的宇宙中，有一颗孕育生命的星球，那就是美丽的蓝星，人类共同的家园。经过千万年的演变，蓝星上的人类组成了四大联邦，分别为：和平联邦、海洋联邦、荒野联邦、战争联邦。\n      “和平联邦”由兔子国及爱好和平的人民组成，在各大冲突、摩擦中始终保持着中立状态，默默地发展着自己的科技和文明。\n      “海洋联邦”由约翰牛国及海洋上的众多岛屿组成，他们占据了蓝星上的广阔的海洋区域，资源丰富，潜力巨大。\n      “荒野联邦”由毛熊国为主的国家组成，他们崇尚自由，热情狂野，他们占据了北半球的大片区域，作为自己国家的领土。\n      “战争联邦”由白头鹰国为主的人民组成，激进狂热，蓝星上大部分战争都和他们有关。\n      一天，乌云遮盖了大地，蓝星的上空撕开了裂缝，未知的敌人蜂拥而至，各联邦淬不及防，损失惨重。\n      指挥官阁下，根据军部的最新命令，我们征召你入伍了，保卫蓝星，保卫我们人类共同的家园。",

                COMPOSE_CONFIRM: "确认要使用 十代战机+王牌十代战机 合成高级战机吗？这将不能保证百分百获得英雄级以上的高级战机",

                //showRewardDlg
                REWARD_DLG_TITLE1: "获得道具",
                REWARD_DLG_TITLE2: "获得道具（邮件发放）",
                REWARD_DLG_TITLE3: "购买成功",
                REWARD_DLG_TITLE4: "购买成功（邮件发放）",

                GET_TASK_REWARD: "返回主界面领取奖励",
                SCROLL_SCREEN: "滑动屏幕",

                //公告
                ANNOUNCEMENT_NULL: "暂无公告",

                //竞技场
                ARENA_EXIT_1: "是否确认放弃战斗？",

                NOT_ENOUGH_DIAMOND: "钻石不足",

                GET_GOLD: "<span style='color:#d6edf5;font-size:22px'>购买后立即获得</span><span style='color:#fc7465;font-size:22px'>%s</span><span style='color:#d6edf5;font-size:22px'>金币</span><br/>",
                GET_DIAMOND: "<span style='color:#d6edf5;font-size:22px'>购买后立即获得</span><span style='color:#fc7465;font-size:22px'>%s</span><span style='color:#d6edf5;font-size:22px'>钻石</span><br/>",
                GET_DAILY: "<span style='color:#eff6ff;font-size:24px'>连续</span><span style='color:#83f287;font-size:24px'>%s</span><span style='color:#eff6ff;font-size:24px'>天，每天可领取</span><br/>",
                BUY_REWARD_GOLD: "<span style='color:#eff6ff;font-size:28px'>购买后立即获得</span><span style='color:#ffce6e;font-size:38px'>%s</span><span style='color:#eff6ff;font-size:28px'>金币</span><br/>",
                BUY_REWARD_DIAMOND: "<span style='color:#eff6ff;font-size:28px'>购买后立即获得</span><span style='color:#ffce6e;font-size:38px'>%s</span><span style='color:#eff6ff;font-size:28px'>钻石</span><br/>",

                ACTIVITY_LUCKY_DESC: "通过转盘获得了:",

                //VIP
                VIP_TIP: "<span style='color:#ffffff;font-size:22px'>再充值</span><span style='color:#ffde00;font-size:22px'>%s元</span><span style='color:#ffffff;font-size:22px'>可立即升至</span><span style='color:#ffde00;font-size:22px'>VIP%s</span>",
                VIP_INFO: "当前：VIP%s",
                VIP_MAX: "已满级",

                STAGE_OPEN_TIP: "<span style='color:#98e7fe;font-size:26px'>指挥官阁下,</span><span style='color:#fef157;font-size:26'>【%s】</span><span style='color:#98e7fe;font-size:26px'>已经收复,可前往下一星球</span><span style='color:#fef157;font-size:26'>【%s】</span><span style='color:#98e7fe;font-size:26px'>,请继续我们的征途：</span>",

                NOT_SUPPORT_AD: "该平台不支持视频广告",
                NEWBIE_AD: "通过[%s]第%s关开放",
                GET_REWARD_COUNT: "<span style='color:#fefefe;font-size:24px'>领取次数</span><span style='color:#ff0000;font-size:24'>(%s/%s)</span>",
                GET_REWARD_COUNT1: "<span style='color:#fefefe;font-size:24px'>领取次数(%s/%s)</span>",

                //DrawCard
                DRAW_CARD_FRAGMENT: "碎片x%s",

                DRAW_CARD_FORMULATYPE1: "普通合成",
                DRAW_CARD_FORMULATYPE2: "高级合成",

                DRAW_CARD_RARE_TIP_DIV1: "<span style='color:#00ffff;font-size:36px'>蓝</span><span style='color:#e0e0e0;font-size:36px'>&lt;紫&lt;橙</span>",
                DRAW_CARD_RARE_TIP_DIV2: "<span style='color:#00ffff;font-size:28px'>%s%</span><span style='color:#e0e0e0;font-size:28px'>概率得蓝卡</span>",
                DRAW_CARD_HERO_TIP_DIV1: "<span style='color:#e0e0e0;font-size:36px'>蓝&lt;</span><span style='color:#ff64ff;font-size:36px'>紫</span><span style='color:#e0e0e0;font-size:36px'>&lt;橙</span>",
                DRAW_CARD_HERO_TIP_DIV2: "<span style='color:#ff64ff;font-size:28px'>%s%</span><span style='color:#e0e0e0;font-size:28px'>概率得紫卡</span>",
                DRAW_CARD_LEGEND_TIP_DIV1: "<span style='color:#e0e0e0;font-size:36px'>蓝&lt;紫&lt;</span><span style='color:#ffde00;font-size:36px'>橙</span>",
                DRAW_CARD_LEGEND_TIP_DIV2: "<span style='color:#ffde00;font-size:28px'>%s%</span><span style='color:#e0e0e0;font-size:28px'>概率得橙卡</span>",

                COUNT_NOT_ENOUGH: "今日领取次数已经到达上限",
                PRUCHASE_1: "<span style='color:#ffffff;font-size:30px'>您已是尊贵的</span><span style='color:#83f287;font-size:30px'>VIP%s</span><span style='color:#ffffff;font-size:30px'>用户，点击可以直接领取</span>",
                PRUCHASE_2: "<span style='color:#83f287;font-size:22px'>VIP%s</span><span style='color:#ffffff;font-size:22px'>及以上</span><span style='color:#83f287;font-size:22px'>免广告</span><span style='color:#ffffff;font-size:22px'>领取</span>",

        }
}
