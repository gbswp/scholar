declare module Data {
    var dataVer: string;
    
    
    var gameConfs: { [index: string]: any };
    var maxGameConfs: number;
    
    var copys: { [index: string]: any };
    var maxCopies: number;
    
    var dragons: { [index: string]: any };
    var maxDragons: number;
    var eliteFuseFormula: any[];
    
    var maxEliteFuseFormulas: number;
    
    var skills: { [index: string]: any };
    var maxSkills: number;
    
    var items: { [index: string]: any };
    var maxItems: number;
    
    var dragonExtra: { [index: string]: any };
    var maxDragonExtras: number;
    var dragonMaxLevel: any[];
    
    var maxDragonMaxLevels: number;
    
    var enhances: { [index: string]: any };
    var maxDragonEnhances: number;
    
    var monster: { [index: string]: any };
    var maxMonsters: number;
    
    var properties: { [index: string]: any };
    var maxProperties: number;
    
    var msgCodes: { [index: string]: any };
    var maxMsgCodes: number;
    
    var speedUp: { [index: string]: any };
    var maxSpeedUps: number;
    
    var dragonInfos: { [index: string]: any };
    var maxDragonInfos: number;
    
    var gamecondition: { [index: string]: any };
    var maxConditions: number;
    
    var gameconditionsubtype: { [index: string]: any };
    var maxConditionsSubType: number;
    
    var levelRewardConf: { [index: string]: any };
    var maxLevelRewardConfs: number;
    
    var rankrewardconf: { [index: string]: any };
    var maxRankRewardConfs: number;
    
    var ratiorankrewardconf: { [index: string]: any };
    var maxRatioRankRewardConfs: number;
    
    var taskConf: { [index: string]: any };
    var maxTasks: number;
    
    var livenessConf: { [index: string]: any };
    var maxLivenessConfs: number;
    
    var researchConf: { [index: string]: any };
    var maxResearchs: number;
    
    var sevendayconf: { [index: string]: any };
    var maxSevenDayConfs: number;
    
    var sevendayextraconf: { [index: string]: any };
    var maxSevenDayExtraConfs: number;
    
    var tutorialconf: { [index: string]: any };
    var maxTutorialConfs: number;
    var onlinerewardconf: any[];
    
    var maxOnlineRewardConfs: number;
    var newbierewardconf: any[];
    
    var maxNewbieRewardConfs: number;
    
    var dailyBossConf: { [index: string]: any };
    var maxDailyBossConf: number;
    
    var dailyBossInfoConf: { [index: string]: any };
    var maxDailyBossInfoConf: number;
    
    var TicketsConf: { [index: string]: any };
    var maxTicketsConf: number;
    
    var LinkpanelConfs: { [index: string]: any };
    var maxLinkpanelConfs: number;
    
    var LinkToConfs: { [index: string]: any };
    var maxLinkToConfs: number;
    
    var sounds: { [index: string]: any };
    var maxSounds: number;
    
    var soundCommons: { [index: string]: any };
    var maxSoundCommons: number;
    
    var soundTypes: { [index: string]: any };
    var maxSoundTypes: number;
    
    var soundSuppresses: { [index: string]: any };
    var maxSoundSuppresses: number;
    
    var moduleOpen: { [index: string]: any };
    var maxModuleOpenConfs: number;
    
    var openConf: { [index: string]: any };
    var maxOpenConfs: number;
    
    var summonedConf: { [index: string]: any };
    var maxSummonedConfs: number;
    
    var loadingTipsConf: { [index: string]: any };
    var maxLoadingTipsConfs: number;
    
    var chatSysConf: { [index: string]: any };
    var maxChatSysConfs: number;
    
    var helpConf: { [index: string]: any };
    var maxHelpConfs: number;
    
    var researchInstituteConfs: { [index: string]: any };
    var maxResearchInstituteConfs: number;
    
    var researchInstituteTypeConfs: { [index: string]: any };
    var maxResearchInstituteTypeConfs: number;
    
    var geneagentConfs: { [index: string]: any };
    var maxGeneagentConfs: number;
    
    var geneagentLevelConfs: { [index: string]: any };
    var maxGeneagentLevelConfs: number;
    
    var arenarewardconfs: { [index: string]: any };
    var maxArenaRewardConfs: number;
    
    var bestrankingconfs: { [index: string]: any };
    var maxBestRankingConfs: number;
    
    var achievementconfs: { [index: string]: any };
    var maxAchievementConfs: number;
    
    var dietipsconfs: { [index: string]: any };
    var maxDieTipsConfs: number;
    
    var vips: { [index: string]: any };
    var maxVips: number;
    
    var freshBoxs: { [index: string]: any };
    var maxFreshBoxs: number;
    
    var ads: { [index: string]: any };
    var maxAds: number;
    
    var vipRights: { [index: string]: any };
    var maxVipRights: number;
    
    var vipRightDescs: { [index: string]: any };
    var maxVipRightDescs: number;
    

    
    class AchievementConf {
        obj: any;
        constructor(obj: any);
        id: number;
        achievement: number;
        reward: ItemInfo[];
        
    }
    
    class Ad {
        obj: any;
        constructor(obj: any);
        id: number;
        boxReward: string;
        extraPlaneLevelUp: string;
        explorePlaneTicket: string;
        missonPassReward: string;
        exploreGeneTicket: string;
        arenaTicket: string;
        dailyBossTicket: string;
        dailyBossDoubleReward: string;
        autoPlayGame: string;
        produceSpeedUp: string;
        breakUp: string;
        backUp: string;
        dailyTask: string;
        sevenDay: string;
        newbieReward: string;
        
    }
    
    class ArenaRewardConf {
        obj: any;
        constructor(obj: any);
        id: number;
        minRank: number;
        maxRank: number;
        onceReward: ItemInfo[];
        dailyReward: ItemInfo[];
        seasonReward: ItemInfo[];
        
    }
    
    class BestRankingConf {
        obj: any;
        constructor(obj: any);
        id: number;
        minRank: number;
        maxRank: number;
        reward: ItemInfo[];
        
    }
    
    class ChatSysConf {
        obj: any;
        constructor(obj: any);
        id: number;
        type: number;
        text: string;
        loop: number;
        loopInterval: number;
        priority: number;
        
    }
    
    class Condition {
        obj: any;
        constructor(obj: any);
        key: number;
        value: number;
        subs: {[index: string]: number};
        
    }
    
    class Copy {
        obj: any;
        constructor(obj: any);
        id: number;
        type: number;
        name: string;
        map: number;
        soundId: number;
        envSoundId: number;
        level: Condition;
        text: string;
        itemIcon: string;
        itemDes: string;
        regressAward: number[];
        regressAwardFormulaType: number;
        stageRewardTimes: number[];
        
    }
    
    class DailyBossConf {
        obj: any;
        constructor(obj: any);
        id: number;
        openTime: number[];
        showReward: number[];
        
    }
    
    class DailyBossInfoConf {
        obj: any;
        constructor(obj: any);
        id: number;
        type: number;
        order: number;
        desc: string;
        showReward: ItemInfo[];
        atk: PropInfo[];
        showIcon: string;
        copy: number;
        trueReward: {[index: string]: number};
        
    }
    
    class DieTipsConf {
        obj: any;
        constructor(obj: any);
        id: number;
        way: number;
        star: number;
        recommend: number;
        colorType: number;
        desc: string;
        desc2: string;
        
    }
    
    class Dragon {
        obj: any;
        constructor(obj: any);
        id: number;
        name: string;
        model: number;
        modelType: number;
        areaType: number;
        areaParams: number[];
        flameRes: string;
        composeRes: string;
        upPartRes: string;
        downPartRes: string;
        bornOffy: number;
        head: number;
        shadow: string;
        shadowParams: number[];
        drawSpine: string;
        type: number;
        camp: number;
        activeItemId: number;
        enhancedList: number[];
        actions: number[];
        scale: number;
        hitStateType: number;
        bounds: number[];
        introduceSoundId: number[];
        gainSoundId: number[];
        attackSoundIds: number[];
        dieSoundIds: number[];
        minStar: number;
        composeNum: ItemInfo;
        faceOffset: number[];
        starOffset: number[];
        starEffectOffset: number[];
        qualityEffectOffset: number[];
        
    }
    
    class DragonEnhance {
        obj: any;
        constructor(obj: any);
        id: number;
        name: string;
        type: number;
        
    }
    
    class DragonExtra {
        obj: any;
        constructor(obj: any);
        id: number;
        name: string;
        dragonId: number;
        star: number;
        skill: number[];
        takeEffectCamps: number[];
        effect: PropGain;
        evoDragonNum: number;
        evoConsumed: ItemInfo[];
        upgradeList: number[];
        upgradeMax: number;
        desc: string;
        propId: number;
        recoveryReward: ItemInfo[];
        recoveryCost: ItemInfo[];
        
    }
    
    class DragonInfoConf {
        obj: any;
        constructor(obj: any);
        Id: number;
        name: string;
        info: string;
        firstName: string;
        age: string;
        brief: string;
        dialogue: string;
        skillText: string;
        backgroundText: string;
        
    }
    
    class DragonMaxLevel {
        obj: any;
        constructor(obj: any);
        quality: number;
        maxLevel: number;
        condition: Condition;
        
    }
    
    class EliteFuseFormula {
        obj: any;
        constructor(obj: any);
        dragonId: number;
        formulaId: number;
        weight: number;
        type: number;
        trueReward: ItemInfo[];
        
    }
    
    class FreshBox {
        obj: any;
        constructor(obj: any);
        showIcon: string;
        reward: ItemInfo[];
        chance: number;
        
    }
    
    class GameCondition {
        obj: any;
        constructor(obj: any);
        id: number;
        dailyid: number;
        type: number;
        desc: string;
        statedesc: string;
        isdaily: number;
        isReach: number;
        isLoop: number;
        
    }
    
    class GameConditionSubType {
        obj: any;
        constructor(obj: any);
        id: number;
        conditionid: number;
        subtype: number;
        subname: string;
        
    }
    
    class GeneagentConf {
        obj: any;
        constructor(obj: any);
        id: number;
        name: string;
        maxLev: number;
        
    }
    
    class GeneagentLevelConf {
        obj: any;
        constructor(obj: any);
        id: number;
        geneagentID: number;
        lv: number;
        type: number;
        num: ItemInfo[];
        gain: PropGain[];
        desc: string;
        camp: number[];
        quality: number[];
        
    }
    
    class HelpConf {
        obj: any;
        constructor(obj: any);
        id: number;
        icon: string;
        title: string;
        content: string;
        
    }
    
    class Item {
        obj: any;
        constructor(obj: any);
        id: number;
        name: string;
        desc: string;
        icon: string;
        star: number;
        color: number;
        type: number;
        count: number;
        autoUse: number;
        objectId: number;
        linkTo: string;
        orMail: number;
        
    }
    
    class ItemInfo {
        obj: any;
        constructor(obj: any);
        key: number;
        value: number;
        
    }
    
    class LevelRewardConf {
        obj: any;
        constructor(obj: any);
        level: number;
        reward: PropInfo[];
        
    }
    
    class LinkToConf {
        obj: any;
        constructor(obj: any);
        id: number;
        icon: string;
        name: string;
        linto: string;
        isShow: number;
        
    }
    
    class LinkpanelConf {
        obj: any;
        constructor(obj: any);
        id: number;
        panel: string;
        openType: number;
        defaultData: number[];
        popupBgAlpha: number;
        closeOnClick: number;
        icon: string;
        name: string;
        goType: number;
        openCondition: PropInfo;
        
    }
    
    class LivenessConf {
        obj: any;
        constructor(obj: any);
        id: number;
        liveness: number;
        reward: {[index: string]: number};
        
    }
    
    class LoadingTipsConf {
        obj: any;
        constructor(obj: any);
        id: number;
        content: string;
        
    }
    
    class ModuleOpenConf {
        obj: any;
        constructor(obj: any);
        id: number;
        targets: string;
        condition: Condition;
        state: number;
        source: string;
        pos: number;
        desc: string;
        
    }
    
    class Monster {
        obj: any;
        constructor(obj: any);
        id: number;
        type: number;
        model: string;
        modelType: number;
        explodeRes: string;
        atkRatio: number;
        defRatio: number;
        hpRatio: number;
        actions: number[];
        scale: number;
        hitStateType: number;
        areaType: number;
        areaParams: number[];
        upPartRes: string;
        downPartRes: string;
        shadow: string;
        shadowParams: number[];
        skillids: string;
        attackTiming: number;
        gap: number;
        bounds: number[];
        
    }
    
    class Msg {
        obj: any;
        constructor(obj: any);
        idx: number;
        text: string;
        region0: number;
        
    }
    
    class NewbieRewardConf {
        obj: any;
        constructor(obj: any);
        id: number;
        openCondition: number;
        finishCondition: number;
        icon: string;
        title: string;
        buddleTips: string;
        nextDay: number;
        ani: string;
        
    }
    
    class OnlineRewardConf {
        obj: any;
        constructor(obj: any);
        id: number;
        groupId: number;
        onlineMinutes: number;
        doingDesc: string;
        awards: ItemInfo[];
        
    }
    
    class OpenConf {
        obj: any;
        constructor(obj: any);
        id: number;
        key: string;
        sys: string;
        icon: string;
        moduleOpenId: number;
        helpIds: number[];
        
    }
    
    class PropGain {
        obj: any;
        constructor(obj: any);
        type: number;
        value: number;
        
    }
    
    class PropInfo {
        obj: any;
        constructor(obj: any);
        key: number;
        value: number;
        
    }
    
    class Property {
        obj: any;
        constructor(obj: any);
        id: number;
        name: string;
        displayDes: string;
        efficiency: PropGain[];
        type: number;
        valType: number;
        
    }
    
    class RankRewardConf {
        obj: any;
        constructor(obj: any);
        id: number;
        type: number;
        startRank: number;
        endRank: number;
        reward: PropInfo;
        
    }
    
    class RatioRankRewardConf {
        obj: any;
        constructor(obj: any);
        id: number;
        type: number;
        startRank: number;
        endRank: number;
        reward: PropInfo;
        
    }
    
    class ResearchConf {
        obj: any;
        constructor(obj: any);
        id: number;
        type: number;
        itemId: number;
        desc: string;
        consume: ItemInfo[];
        
    }
    
    class ResearchInstituteConf {
        obj: any;
        constructor(obj: any);
        id: number;
        researchId: number;
        type: number;
        lv: number;
        num: PropInfo;
        gain: string;
        condition: Condition;
        
    }
    
    class ResearchInstituteTypeConf {
        obj: any;
        constructor(obj: any);
        id: number;
        icon: string;
        name: string;
        type: number;
        
    }
    
    class SevenDayConf {
        obj: any;
        constructor(obj: any);
        id: number;
        day: number;
        desc: string;
        reward: PropInfo;
        
    }
    
    class SevenDayExtraConf {
        obj: any;
        constructor(obj: any);
        id: number;
        day: number;
        desc: string;
        reward: PropInfo;
        
    }
    
    class Skill {
        obj: any;
        constructor(obj: any);
        id: number;
        name: string;
        cd: number;
        opType: number;
        gunfire: string;
        res: number;
        preeffect: string;
        bombEffect: number;
        speed: number[];
        shootPos: PropInfo[];
        angle: number[];
        bulletNum: number;
        interval: number;
        duration: number;
        areaType: number;
        areaParams: number[];
        hurtInterval: number;
        tail: number[];
        soundIds: number[];
        hurtSoundIds: number[];
        bulletHurt: number;
        resScale: number;
        boomScale: number;
        
    }
    
    class Sound {
        obj: any;
        constructor(obj: any);
        id: number;
        soundType: number;
        volumeSize: number;
        soundResource: string;
        loop: number;
        delayTime: number;
        fadeIn: number;
        fadeOut: number;
        priority: number;
        
    }
    
    class SoundCommon {
        obj: any;
        constructor(obj: any);
        id: number;
        key: string;
        soundIds: number[];
        
    }
    
    class SoundSuppress {
        obj: any;
        constructor(obj: any);
        id: number;
        type: number;
        suppress: number[];
        attackTime: number;
        ratio: number;
        releaseTime: number;
        
    }
    
    class SoundType {
        obj: any;
        constructor(obj: any);
        id: number;
        priority: number;
        instance: number;
        path: string;
        period: number;
        replaceable: number;
        detectPriority: number;
        
    }
    
    class SpeedUp {
        obj: any;
        constructor(obj: any);
        id: number;
        type: number;
        name: string;
        rawEgg: number;
        autoFusion: number;
        autoHatch: number;
        slowEgg: number;
        lastTime: number;
        accuTotalTime: number;
        maxUseTimes: number;
        consume: ItemInfo[];
        
    }
    
    class SummonedConf {
        obj: any;
        constructor(obj: any);
        id: number;
        type: number;
        model: string;
        modelType: number;
        actions: number[];
        scale: number;
        hitStateType: number;
        explodeRes: string;
        atkRatio: number;
        defRatio: number;
        HPRatio: number;
        areaType: number;
        areaParams: number[];
        damageRatio: number;
        atk: string;
        
    }
    
    class TaskConf {
        obj: any;
        constructor(obj: any);
        id: number;
        type: number;
        subType: number;
        order: number;
        condition: Condition;
        awards: {[index: string]: number};
        openCondition: Condition;
        linkTo: number[];
        liveness: number;
        
    }
    
    class TicketConf {
        obj: any;
        constructor(obj: any);
        id: number;
        max: number;
        coolDown: number;
        shareType: number[];
        cost: ItemInfo[];
        
    }
    
    class TutorialConf {
        obj: any;
        constructor(obj: any);
        id: number;
        section: number;
        force: number;
        screenMask: number;
        speakIndex: string;
        schedule: string;
        guideid: number;
        type: number;
        offset: number[];
        taskId: number[];
        
    }
    
    class Vip {
        obj: any;
        constructor(obj: any);
        level: number;
        needRmb: number;
        gifts: ItemInfo[];
        vipRightIds: number[];
        mainShow: PropInfo;
        dailyGifts: ItemInfo[];
        vipIcon: string;
        
    }
    
    class VipRightDesc {
        obj: any;
        constructor(obj: any);
        id: number;
        descIcon: string;
        desc: string;
        
    }
    
    class VipRights {
        obj: any;
        constructor(obj: any);
        id: number;
        vip: number;
        rightId: number;
        value: number;
        isShow: number;
        
    }
    

    class gameConf {
        
        static CombatEffectivenessA: string;
        static CombatEffectivenessB: string;
        static CombatEffectivenessC1: string;
        static CombatEffectivenessC2: string;
        static CombatEffectivenessC3: string;
        static CombatEffectivenessD: string;
        static FirstRecharge: string;
        static RewardADPower: string;
        static RewardADTimes: string;
        static RewardDiamondPower: string;
        static StageCountLimit: string;
        static adGoldLoginValue: string;
        static adGoldStageValue: string;
        static arenaFightCooldownTime: string;
        static arenaFightTimeLimit: string;
        static arenaRecord: string;
        static autoPlayTimeByDiamond: string;
        static autoPlayTimeByDiamondCost: string;
        static autoPlayTimeByWatchAd: string;
        static autoPlayTimeByWatchAdNum: string;
        static boxDiamondValue: string;
        static boxGoldValue: string;
        static boxTime: string;
        static breakDiamondCost: string;
        static chattingCD: string;
        static collectionaward: string;
        static consumeEggs: string;
        static createUserRptTask: string;
        static dailyADRegress: string;
        static dragon3SkipLevel: string;
        static dragon4SkipLevel: string;
        static dragon5SkipLevel: string;
        static dragonNum: string;
        static dragonSkipLevelCondition: string;
        static eggcondition: string;
        static eliteDragonFightNum: string;
        static followAward: string;
        static fusionLvUpRate: string;
        static getnewplane: string;
        static hatchLvUpRate: string;
        static herocompose1: string;
        static herocompose2: string;
        static herocomposeDuration1: string;
        static herocomposeDuration2: string;
        static herocomposeShowCards: string;
        static herocomposeShowCardsDaytimes: string;
        static herocomposeTimes1: string;
        static herocomposeTimes2: string;
        static herocomposeTimes3: string;
        static initDailyBornNum: string;
        static initEggNum: string;
        static initFastBornTime: string;
        static initFuseTime: string;
        static initHatchTime: string;
        static initSlowBornTime: string;
        static jampStage: string;
        static jampStageRate: string;
        static jumpBoxCountdown: string;
        static loginreward1: string;
        static mainTaskTime: string;
        static noAdBoxAwardCount: string;
        static normalDragonFightNum: string;
        static normalDragonScale: string;
        static offlineRewardRate: string;
        static offlineStageRate: string;
        static onlineADRewardHoldTime: string;
        static onlneADRewardLeaveTime: string;
        static planeMax: string;
        static playermaxlevel: string;
        static playername: string;
        static pvpHurtCoefficient: string;
        static recoverySourcePercent: string;
        static regressADPower: string;
        static regressDiamondPower: string;
        static regressTime: string;
        static rushExtStage: string;
        static rushNum: string;
        static rushStage: string;
        static rushTime: string;
        static searchDragonADCount: string;
        static searchDragonInitCount: string;
        static searchDragonInitLimit: string;
        static searchDragonInitTime: string;
        static searchDragonTicketDiamondCost: string;
        static searchSimesADCount: string;
        static searchSimesDiamondBuyAllDiscount: string;
        static searchSimesInitCount: string;
        static searchSimesInitLimit: string;
        static searchSimesInitTime: string;
        static searchSimesTicketDiamondCost: string;
        static shareGameReward: string;
        static simes12: string;
        static simes13: string;
        static siwanghuitui: string;
        static stagelimittime: string;
        static taskIdByAds: string;
        static taskopen: string;
        static wuguanggaofuxianci: string;
    }
    class soundCommonKey {
        
        static fanhangBgm: number;
        static breakBgm: number;
        static fanhangSound: number;
        static levelUp: number;
        static legendBossNext: number;
        static exploreSuccess: number;
        static normalCompose: number;
        static formationDisappear: number;
        static eggClick: number;
        static openChest: number;
        static gainChest: number;
        static buttonCommon: number;
        static superCompose: number;
        static panelOnOff: number;
        static dragonLevelUp: number;
        static produceBgm: number;
        static warn: number;
        static reward: number;
        static bossApear: number;
        static bossSuccess: number;
        static bossFail: number;
        static daojishi: number;
        static huihe: number;
        static ko: number;
        static goldfly: number;
    }
    class linkpanelConfKey {
        
        static HomeDlg: number;
        static ShopDlg: number;
        static DragonListDlg: number;
        static SearchDlg: number;
        static PlayerInfoDlg: number;
        static DailyBossDlg: number;
        static ResearchDlg: number;
        static EssenceDlg: number;
        static TaskDailyDlg: number;
        static ArenaDlg: number;
        static announcementDlg: number;
        static MailBoxDlg: number;
        static BackChooseStageDlg: number;
        static JackpotDlg: number;
        static BackRewardDlg: number;
        static ProduceSpeedDlg: number;
        static TaskLoopDlg: number;
        static AutoPlayDlg: number;
        static DragonLevelupDlg: number;
        static DrawCardDlg: number;
        static FirstRechargeDlg: number;
        static ActivityCardDlg: number;
        static ActivityLuckyDlg: number;
        static composeTen: number;
        static composeNine: number;
        static getNewPlane: number;
    }


    
    
    function getCopy(index: number): Copy;
    
    
    function getDragon(index: number): Dragon;
    
    
    function getEliteFuseFormula(index: number): EliteFuseFormula;
    
    
    function getSkill(index: number): Skill;
    
    
    function getItem(index: number): Item;
    
    
    function getDragonExtra(index: number): DragonExtra;
    
    
    function getDragonMaxLevel(index: number): DragonMaxLevel;
    
    
    function getDragonEnhance(index: number): DragonEnhance;
    
    
    function getMonster(index: number): Monster;
    
    
    function getProperty(index: number): Property;
    
    
    function getMsg(index: number): Msg;
    
    
    function getSpeedUp(index: number): SpeedUp;
    
    
    function getDragonInfoConf(index: number): DragonInfoConf;
    
    
    function getGameCondition(index: number): GameCondition;
    
    
    function getGameConditionSubType(index: number): GameConditionSubType;
    
    
    function getLevelRewardConf(index: number): LevelRewardConf;
    
    
    function getRankRewardConf(index: number): RankRewardConf;
    
    
    function getRatioRankRewardConf(index: number): RatioRankRewardConf;
    
    
    function getTaskConf(index: number): TaskConf;
    
    
    function getLivenessConf(index: number): LivenessConf;
    
    
    function getResearchConf(index: number): ResearchConf;
    
    
    function getSevenDayConf(index: number): SevenDayConf;
    
    
    function getSevenDayExtraConf(index: number): SevenDayExtraConf;
    
    
    function getTutorialConf(index: number): TutorialConf;
    
    
    function getOnlineRewardConf(index: number): OnlineRewardConf;
    
    
    function getNewbieRewardConf(index: number): NewbieRewardConf;
    
    
    function getDailyBossConf(index: number): DailyBossConf;
    
    
    function getDailyBossInfoConf(index: number): DailyBossInfoConf;
    
    
    function getTicketConf(index: number): TicketConf;
    
    
    function getLinkpanelConf(index: number): LinkpanelConf;
    
    
    function getLinkToConf(index: number): LinkToConf;
    
    
    function getSound(index: number): Sound;
    
    
    function getSoundCommon(index: number): SoundCommon;
    
    
    function getSoundType(index: number): SoundType;
    
    
    function getSoundSuppress(index: number): SoundSuppress;
    
    
    function getModuleOpenConf(index: number): ModuleOpenConf;
    
    
    function getOpenConf(index: number): OpenConf;
    
    
    function getSummonedConf(index: number): SummonedConf;
    
    
    function getLoadingTipsConf(index: number): LoadingTipsConf;
    
    
    function getChatSysConf(index: number): ChatSysConf;
    
    
    function getHelpConf(index: number): HelpConf;
    
    
    function getResearchInstituteConf(index: number): ResearchInstituteConf;
    
    
    function getResearchInstituteTypeConf(index: number): ResearchInstituteTypeConf;
    
    
    function getGeneagentConf(index: number): GeneagentConf;
    
    
    function getGeneagentLevelConf(index: number): GeneagentLevelConf;
    
    
    function getArenaRewardConf(index: number): ArenaRewardConf;
    
    
    function getBestRankingConf(index: number): BestRankingConf;
    
    
    function getAchievementConf(index: number): AchievementConf;
    
    
    function getDieTipsConf(index: number): DieTipsConf;
    
    
    function getVip(index: number): Vip;
    
    
    function getFreshBox(index: number): FreshBox;
    
    
    function getAd(index: number): Ad;
    
    
    function getVipRights(index: number): VipRights;
    
    
    function getVipRightDesc(index: number): VipRightDesc;
    
    
    function buildData(data: any): void;
}
