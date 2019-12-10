var Data = window.Data || (window.Data = {});
(function (Data) {
    function objd(p) {
        Object.defineProperty(p, "obj", {
            get: function() { return this._; },
            set: function(value) {
                this._ = typeof value == 'string' ? JSON.parse(value) : value;
            },
            enumerable: true,
            configurable: true
        });
    }
    function d(p, name, getter) {
        Object.defineProperty(p, name, {
            get: getter,
            enumerable: true,
            configurable: true
        });
    }
    
    var AchievementConf = (function() {
        function AchievementConf(obj) {
            this.obj = obj;
        }
        var p = AchievementConf.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "achievement", function() {
            return this._[1];
        });
        
        d(p, "reward", function() {
            var obj = this._[2];
            var len = obj.length;
            var arr = [];
            for (var i = 0; i < len; i++) {
                arr.push(new ItemInfo(obj[i]));
            }
            return arr;
        });
        
        return AchievementConf;
    }());
    Data.AchievementConf = AchievementConf;
    
    var Ad = (function() {
        function Ad(obj) {
            this.obj = obj;
        }
        var p = Ad.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "boxReward", function() {
            return this._[1];
        });
        
        d(p, "extraPlaneLevelUp", function() {
            return this._[2];
        });
        
        d(p, "explorePlaneTicket", function() {
            return this._[3];
        });
        
        d(p, "missonPassReward", function() {
            return this._[4];
        });
        
        d(p, "exploreGeneTicket", function() {
            return this._[5];
        });
        
        d(p, "arenaTicket", function() {
            return this._[6];
        });
        
        d(p, "dailyBossTicket", function() {
            return this._[7];
        });
        
        d(p, "dailyBossDoubleReward", function() {
            return this._[8];
        });
        
        d(p, "autoPlayGame", function() {
            return this._[9];
        });
        
        d(p, "produceSpeedUp", function() {
            return this._[10];
        });
        
        d(p, "breakUp", function() {
            return this._[11];
        });
        
        d(p, "backUp", function() {
            return this._[12];
        });
        
        d(p, "dailyTask", function() {
            return this._[13];
        });
        
        d(p, "sevenDay", function() {
            return this._[14];
        });
        
        d(p, "newbieReward", function() {
            return this._[15];
        });
        
        return Ad;
    }());
    Data.Ad = Ad;
    
    var ArenaRewardConf = (function() {
        function ArenaRewardConf(obj) {
            this.obj = obj;
        }
        var p = ArenaRewardConf.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "minRank", function() {
            return this._[1];
        });
        
        d(p, "maxRank", function() {
            return this._[2];
        });
        
        d(p, "onceReward", function() {
            var obj = this._[3];
            var len = obj.length;
            var arr = [];
            for (var i = 0; i < len; i++) {
                arr.push(new ItemInfo(obj[i]));
            }
            return arr;
        });
        
        d(p, "dailyReward", function() {
            var obj = this._[4];
            var len = obj.length;
            var arr = [];
            for (var i = 0; i < len; i++) {
                arr.push(new ItemInfo(obj[i]));
            }
            return arr;
        });
        
        d(p, "seasonReward", function() {
            var obj = this._[5];
            var len = obj.length;
            var arr = [];
            for (var i = 0; i < len; i++) {
                arr.push(new ItemInfo(obj[i]));
            }
            return arr;
        });
        
        return ArenaRewardConf;
    }());
    Data.ArenaRewardConf = ArenaRewardConf;
    
    var BestRankingConf = (function() {
        function BestRankingConf(obj) {
            this.obj = obj;
        }
        var p = BestRankingConf.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "minRank", function() {
            return this._[1];
        });
        
        d(p, "maxRank", function() {
            return this._[2];
        });
        
        d(p, "reward", function() {
            var obj = this._[3];
            var len = obj.length;
            var arr = [];
            for (var i = 0; i < len; i++) {
                arr.push(new ItemInfo(obj[i]));
            }
            return arr;
        });
        
        return BestRankingConf;
    }());
    Data.BestRankingConf = BestRankingConf;
    
    var ChatEmojiConf = (function() {
        function ChatEmojiConf(obj) {
            this.obj = obj;
        }
        var p = ChatEmojiConf.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "type", function() {
            return this._[1];
        });
        
        d(p, "text", function() {
            return this._[2];
        });
        
        return ChatEmojiConf;
    }());
    Data.ChatEmojiConf = ChatEmojiConf;
    
    var ChatSysConf = (function() {
        function ChatSysConf(obj) {
            this.obj = obj;
        }
        var p = ChatSysConf.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "type", function() {
            return this._[1];
        });
        
        d(p, "text", function() {
            return this._[2];
        });
        
        d(p, "loop", function() {
            return this._[3];
        });
        
        d(p, "loopInterval", function() {
            return this._[4];
        });
        
        d(p, "priority", function() {
            return this._[5];
        });
        
        return ChatSysConf;
    }());
    Data.ChatSysConf = ChatSysConf;
    
    var Condition = (function() {
        function Condition(obj) {
            this.obj = obj;
        }
        var p = Condition.prototype;
        objd(p);
        
        d(p, "key", function() {
            return this._[0];
        });
        
        d(p, "value", function() {
            return this._[1];
        });
        
        d(p, "subs", function() {
            return this._[2];
        });
        
        return Condition;
    }());
    Data.Condition = Condition;
    
    var Copy = (function() {
        function Copy(obj) {
            this.obj = obj;
        }
        var p = Copy.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "type", function() {
            return this._[1];
        });
        
        d(p, "name", function() {
            return this._[2];
        });
        
        d(p, "map", function() {
            return this._[3];
        });
        
        d(p, "soundId", function() {
            return this._[4];
        });
        
        d(p, "envSoundId", function() {
            return this._[5];
        });
        
        d(p, "level", function() {
            return new Condition(this._[6]);
        });
        
        d(p, "text", function() {
            return this._[7];
        });
        
        d(p, "itemIcon", function() {
            return this._[8];
        });
        
        d(p, "itemDes", function() {
            return this._[9];
        });
        
        d(p, "regressAward", function() {
            return this._[10];
        });
        
        d(p, "regressAwardFormulaType", function() {
            return this._[11];
        });
        
        d(p, "stageRewardTimes", function() {
            return this._[12];
        });
        
        return Copy;
    }());
    Data.Copy = Copy;
    
    var DailyBossConf = (function() {
        function DailyBossConf(obj) {
            this.obj = obj;
        }
        var p = DailyBossConf.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "openTime", function() {
            return this._[1];
        });
        
        d(p, "showReward", function() {
            return this._[2];
        });
        
        return DailyBossConf;
    }());
    Data.DailyBossConf = DailyBossConf;
    
    var DailyBossInfoConf = (function() {
        function DailyBossInfoConf(obj) {
            this.obj = obj;
        }
        var p = DailyBossInfoConf.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "type", function() {
            return this._[1];
        });
        
        d(p, "order", function() {
            return this._[2];
        });
        
        d(p, "desc", function() {
            return this._[3];
        });
        
        d(p, "showReward", function() {
            var obj = this._[4];
            var len = obj.length;
            var arr = [];
            for (var i = 0; i < len; i++) {
                arr.push(new ItemInfo(obj[i]));
            }
            return arr;
        });
        
        d(p, "atk", function() {
            var obj = this._[5];
            var len = obj.length;
            var arr = [];
            for (var i = 0; i < len; i++) {
                arr.push(new PropInfo(obj[i]));
            }
            return arr;
        });
        
        d(p, "showIcon", function() {
            return this._[6];
        });
        
        d(p, "copy", function() {
            return this._[7];
        });
        
        d(p, "trueReward", function() {
            return this._[8];
        });
        
        return DailyBossInfoConf;
    }());
    Data.DailyBossInfoConf = DailyBossInfoConf;
    
    var DieTipsConf = (function() {
        function DieTipsConf(obj) {
            this.obj = obj;
        }
        var p = DieTipsConf.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "way", function() {
            return this._[1];
        });
        
        d(p, "star", function() {
            return this._[2];
        });
        
        d(p, "recommend", function() {
            return this._[3];
        });
        
        d(p, "colorType", function() {
            return this._[4];
        });
        
        d(p, "desc", function() {
            return this._[5];
        });
        
        d(p, "desc2", function() {
            return this._[6];
        });
        
        d(p, "linkTo", function() {
            return this._[7];
        });
        
        return DieTipsConf;
    }());
    Data.DieTipsConf = DieTipsConf;
    
    var Dragon = (function() {
        function Dragon(obj) {
            this.obj = obj;
        }
        var p = Dragon.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "name", function() {
            return this._[1];
        });
        
        d(p, "model", function() {
            return this._[2];
        });
        
        d(p, "modelType", function() {
            return this._[3];
        });
        
        d(p, "areaType", function() {
            return this._[4];
        });
        
        d(p, "areaParams", function() {
            return this._[5];
        });
        
        d(p, "flameRes", function() {
            return this._[6];
        });
        
        d(p, "composeRes", function() {
            return this._[7];
        });
        
        d(p, "upPartRes", function() {
            return this._[8];
        });
        
        d(p, "downPartRes", function() {
            return this._[9];
        });
        
        d(p, "bornOffy", function() {
            return this._[10];
        });
        
        d(p, "head", function() {
            return this._[11];
        });
        
        d(p, "shadow", function() {
            return this._[12];
        });
        
        d(p, "shadowParams", function() {
            return this._[13];
        });
        
        d(p, "drawSpine", function() {
            return this._[14];
        });
        
        d(p, "type", function() {
            return this._[15];
        });
        
        d(p, "camp", function() {
            return this._[16];
        });
        
        d(p, "activeItemId", function() {
            return this._[17];
        });
        
        d(p, "enhancedList", function() {
            return this._[18];
        });
        
        d(p, "actions", function() {
            return this._[19];
        });
        
        d(p, "scale", function() {
            return this._[20];
        });
        
        d(p, "hitStateType", function() {
            return this._[21];
        });
        
        d(p, "bounds", function() {
            return this._[22];
        });
        
        d(p, "introduceSoundId", function() {
            return this._[23];
        });
        
        d(p, "gainSoundId", function() {
            return this._[24];
        });
        
        d(p, "attackSoundIds", function() {
            return this._[25];
        });
        
        d(p, "dieSoundIds", function() {
            return this._[26];
        });
        
        d(p, "minStar", function() {
            return this._[27];
        });
        
        d(p, "composeNum", function() {
            return new ItemInfo(this._[28]);
        });
        
        d(p, "faceOffset", function() {
            return this._[29];
        });
        
        d(p, "starOffset", function() {
            return this._[30];
        });
        
        d(p, "starEffectOffset", function() {
            return this._[31];
        });
        
        d(p, "qualityEffectOffset", function() {
            return this._[32];
        });
        
        return Dragon;
    }());
    Data.Dragon = Dragon;
    
    var DragonEnhance = (function() {
        function DragonEnhance(obj) {
            this.obj = obj;
        }
        var p = DragonEnhance.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "name", function() {
            return this._[1];
        });
        
        d(p, "type", function() {
            return this._[2];
        });
        
        return DragonEnhance;
    }());
    Data.DragonEnhance = DragonEnhance;
    
    var DragonExtra = (function() {
        function DragonExtra(obj) {
            this.obj = obj;
        }
        var p = DragonExtra.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "name", function() {
            return this._[1];
        });
        
        d(p, "dragonId", function() {
            return this._[2];
        });
        
        d(p, "star", function() {
            return this._[3];
        });
        
        d(p, "skill", function() {
            return this._[4];
        });
        
        d(p, "takeEffectCamps", function() {
            return this._[5];
        });
        
        d(p, "effect", function() {
            return new PropGain(this._[6]);
        });
        
        d(p, "evoDragonNum", function() {
            return this._[7];
        });
        
        d(p, "evoConsumed", function() {
            var obj = this._[8];
            var len = obj.length;
            var arr = [];
            for (var i = 0; i < len; i++) {
                arr.push(new ItemInfo(obj[i]));
            }
            return arr;
        });
        
        d(p, "upgradeList", function() {
            return this._[9];
        });
        
        d(p, "upgradeMax", function() {
            return this._[10];
        });
        
        d(p, "desc", function() {
            return this._[11];
        });
        
        d(p, "propId", function() {
            return this._[12];
        });
        
        d(p, "recoveryReward", function() {
            var obj = this._[13];
            var len = obj.length;
            var arr = [];
            for (var i = 0; i < len; i++) {
                arr.push(new ItemInfo(obj[i]));
            }
            return arr;
        });
        
        d(p, "recoveryCost", function() {
            var obj = this._[14];
            var len = obj.length;
            var arr = [];
            for (var i = 0; i < len; i++) {
                arr.push(new ItemInfo(obj[i]));
            }
            return arr;
        });
        
        return DragonExtra;
    }());
    Data.DragonExtra = DragonExtra;
    
    var DragonInfoConf = (function() {
        function DragonInfoConf(obj) {
            this.obj = obj;
        }
        var p = DragonInfoConf.prototype;
        objd(p);
        
        d(p, "Id", function() {
            return this._[0];
        });
        
        d(p, "name", function() {
            return this._[1];
        });
        
        d(p, "info", function() {
            return this._[2];
        });
        
        d(p, "firstName", function() {
            return this._[3];
        });
        
        d(p, "age", function() {
            return this._[4];
        });
        
        d(p, "brief", function() {
            return this._[5];
        });
        
        d(p, "dialogue", function() {
            return this._[6];
        });
        
        d(p, "skillText", function() {
            return this._[7];
        });
        
        d(p, "backgroundText", function() {
            return this._[8];
        });
        
        return DragonInfoConf;
    }());
    Data.DragonInfoConf = DragonInfoConf;
    
    var DragonMaxLevel = (function() {
        function DragonMaxLevel(obj) {
            this.obj = obj;
        }
        var p = DragonMaxLevel.prototype;
        objd(p);
        
        d(p, "quality", function() {
            return this._[0];
        });
        
        d(p, "maxLevel", function() {
            return this._[1];
        });
        
        d(p, "condition", function() {
            return new Condition(this._[2]);
        });
        
        return DragonMaxLevel;
    }());
    Data.DragonMaxLevel = DragonMaxLevel;
    
    var EliteFuseFormula = (function() {
        function EliteFuseFormula(obj) {
            this.obj = obj;
        }
        var p = EliteFuseFormula.prototype;
        objd(p);
        
        d(p, "dragonId", function() {
            return this._[0];
        });
        
        d(p, "formulaId", function() {
            return this._[1];
        });
        
        d(p, "weight", function() {
            return this._[2];
        });
        
        d(p, "type", function() {
            return this._[3];
        });
        
        d(p, "trueReward", function() {
            var obj = this._[4];
            var len = obj.length;
            var arr = [];
            for (var i = 0; i < len; i++) {
                arr.push(new ItemInfo(obj[i]));
            }
            return arr;
        });
        
        return EliteFuseFormula;
    }());
    Data.EliteFuseFormula = EliteFuseFormula;
    
    var FreshBox = (function() {
        function FreshBox(obj) {
            this.obj = obj;
        }
        var p = FreshBox.prototype;
        objd(p);
        
        d(p, "showIcon", function() {
            return this._[0];
        });
        
        d(p, "reward", function() {
            var obj = this._[1];
            var len = obj.length;
            var arr = [];
            for (var i = 0; i < len; i++) {
                arr.push(new ItemInfo(obj[i]));
            }
            return arr;
        });
        
        d(p, "chance", function() {
            return this._[2];
        });
        
        return FreshBox;
    }());
    Data.FreshBox = FreshBox;
    
    var GameCondition = (function() {
        function GameCondition(obj) {
            this.obj = obj;
        }
        var p = GameCondition.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "dailyid", function() {
            return this._[1];
        });
        
        d(p, "type", function() {
            return this._[2];
        });
        
        d(p, "desc", function() {
            return this._[3];
        });
        
        d(p, "statedesc", function() {
            return this._[4];
        });
        
        d(p, "isdaily", function() {
            return this._[5];
        });
        
        d(p, "isReach", function() {
            return this._[6];
        });
        
        d(p, "isLoop", function() {
            return this._[7];
        });
        
        return GameCondition;
    }());
    Data.GameCondition = GameCondition;
    
    var GameConditionSubType = (function() {
        function GameConditionSubType(obj) {
            this.obj = obj;
        }
        var p = GameConditionSubType.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "conditionid", function() {
            return this._[1];
        });
        
        d(p, "subtype", function() {
            return this._[2];
        });
        
        d(p, "subname", function() {
            return this._[3];
        });
        
        return GameConditionSubType;
    }());
    Data.GameConditionSubType = GameConditionSubType;
    
    var GeneagentConf = (function() {
        function GeneagentConf(obj) {
            this.obj = obj;
        }
        var p = GeneagentConf.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "name", function() {
            return this._[1];
        });
        
        d(p, "maxLev", function() {
            return this._[2];
        });
        
        return GeneagentConf;
    }());
    Data.GeneagentConf = GeneagentConf;
    
    var GeneagentLevelConf = (function() {
        function GeneagentLevelConf(obj) {
            this.obj = obj;
        }
        var p = GeneagentLevelConf.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "geneagentID", function() {
            return this._[1];
        });
        
        d(p, "lv", function() {
            return this._[2];
        });
        
        d(p, "type", function() {
            return this._[3];
        });
        
        d(p, "num", function() {
            var obj = this._[4];
            var len = obj.length;
            var arr = [];
            for (var i = 0; i < len; i++) {
                arr.push(new ItemInfo(obj[i]));
            }
            return arr;
        });
        
        d(p, "gain", function() {
            var obj = this._[5];
            var len = obj.length;
            var arr = [];
            for (var i = 0; i < len; i++) {
                arr.push(new PropGain(obj[i]));
            }
            return arr;
        });
        
        d(p, "desc", function() {
            return this._[6];
        });
        
        d(p, "camp", function() {
            return this._[7];
        });
        
        d(p, "quality", function() {
            return this._[8];
        });
        
        return GeneagentLevelConf;
    }());
    Data.GeneagentLevelConf = GeneagentLevelConf;
    
    var HelpConf = (function() {
        function HelpConf(obj) {
            this.obj = obj;
        }
        var p = HelpConf.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "icon", function() {
            return this._[1];
        });
        
        d(p, "title", function() {
            return this._[2];
        });
        
        d(p, "content", function() {
            return this._[3];
        });
        
        return HelpConf;
    }());
    Data.HelpConf = HelpConf;
    
    var Item = (function() {
        function Item(obj) {
            this.obj = obj;
        }
        var p = Item.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "name", function() {
            return this._[1];
        });
        
        d(p, "desc", function() {
            return this._[2];
        });
        
        d(p, "icon", function() {
            return this._[3];
        });
        
        d(p, "star", function() {
            return this._[4];
        });
        
        d(p, "color", function() {
            return this._[5];
        });
        
        d(p, "type", function() {
            return this._[6];
        });
        
        d(p, "count", function() {
            return this._[7];
        });
        
        d(p, "autoUse", function() {
            return this._[8];
        });
        
        d(p, "objectId", function() {
            return this._[9];
        });
        
        d(p, "linkTo", function() {
            return this._[10];
        });
        
        d(p, "orMail", function() {
            return this._[11];
        });
        
        return Item;
    }());
    Data.Item = Item;
    
    var ItemInfo = (function() {
        function ItemInfo(obj) {
            this.obj = obj;
        }
        var p = ItemInfo.prototype;
        objd(p);
        
        d(p, "key", function() {
            return this._[0];
        });
        
        d(p, "value", function() {
            return this._[1];
        });
        
        return ItemInfo;
    }());
    Data.ItemInfo = ItemInfo;
    
    var LegendaryBossRankReward = (function() {
        function LegendaryBossRankReward(obj) {
            this.obj = obj;
        }
        var p = LegendaryBossRankReward.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "minRank", function() {
            return this._[1];
        });
        
        d(p, "maxRank", function() {
            return this._[2];
        });
        
        d(p, "dailyReward", function() {
            var obj = this._[3];
            var len = obj.length;
            var arr = [];
            for (var i = 0; i < len; i++) {
                arr.push(new ItemInfo(obj[i]));
            }
            return arr;
        });
        
        return LegendaryBossRankReward;
    }());
    Data.LegendaryBossRankReward = LegendaryBossRankReward;
    
    var LevelRewardConf = (function() {
        function LevelRewardConf(obj) {
            this.obj = obj;
        }
        var p = LevelRewardConf.prototype;
        objd(p);
        
        d(p, "level", function() {
            return this._[0];
        });
        
        d(p, "reward", function() {
            var obj = this._[1];
            var len = obj.length;
            var arr = [];
            for (var i = 0; i < len; i++) {
                arr.push(new PropInfo(obj[i]));
            }
            return arr;
        });
        
        return LevelRewardConf;
    }());
    Data.LevelRewardConf = LevelRewardConf;
    
    var LinkToConf = (function() {
        function LinkToConf(obj) {
            this.obj = obj;
        }
        var p = LinkToConf.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "icon", function() {
            return this._[1];
        });
        
        d(p, "name", function() {
            return this._[2];
        });
        
        d(p, "linto", function() {
            return this._[3];
        });
        
        d(p, "isShow", function() {
            return this._[4];
        });
        
        return LinkToConf;
    }());
    Data.LinkToConf = LinkToConf;
    
    var LinkpanelConf = (function() {
        function LinkpanelConf(obj) {
            this.obj = obj;
        }
        var p = LinkpanelConf.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "panel", function() {
            return this._[1];
        });
        
        d(p, "openType", function() {
            return this._[2];
        });
        
        d(p, "defaultData", function() {
            return this._[3];
        });
        
        d(p, "popupBgAlpha", function() {
            return this._[4];
        });
        
        d(p, "closeOnClick", function() {
            return this._[5];
        });
        
        d(p, "icon", function() {
            return this._[6];
        });
        
        d(p, "name", function() {
            return this._[7];
        });
        
        d(p, "goType", function() {
            return this._[8];
        });
        
        d(p, "openCondition", function() {
            return new PropInfo(this._[9]);
        });
        
        return LinkpanelConf;
    }());
    Data.LinkpanelConf = LinkpanelConf;
    
    var LivenessConf = (function() {
        function LivenessConf(obj) {
            this.obj = obj;
        }
        var p = LivenessConf.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "liveness", function() {
            return this._[1];
        });
        
        d(p, "reward", function() {
            return this._[2];
        });
        
        return LivenessConf;
    }());
    Data.LivenessConf = LivenessConf;
    
    var LoadingTipsConf = (function() {
        function LoadingTipsConf(obj) {
            this.obj = obj;
        }
        var p = LoadingTipsConf.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "content", function() {
            return this._[1];
        });
        
        return LoadingTipsConf;
    }());
    Data.LoadingTipsConf = LoadingTipsConf;
    
    var ModuleOpenConf = (function() {
        function ModuleOpenConf(obj) {
            this.obj = obj;
        }
        var p = ModuleOpenConf.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "targets", function() {
            return this._[1];
        });
        
        d(p, "condition", function() {
            return new Condition(this._[2]);
        });
        
        d(p, "state", function() {
            return this._[3];
        });
        
        d(p, "source", function() {
            return this._[4];
        });
        
        d(p, "pos", function() {
            return this._[5];
        });
        
        d(p, "desc", function() {
            return this._[6];
        });
        
        return ModuleOpenConf;
    }());
    Data.ModuleOpenConf = ModuleOpenConf;
    
    var Monster = (function() {
        function Monster(obj) {
            this.obj = obj;
        }
        var p = Monster.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "type", function() {
            return this._[1];
        });
        
        d(p, "model", function() {
            return this._[2];
        });
        
        d(p, "modelType", function() {
            return this._[3];
        });
        
        d(p, "explodeRes", function() {
            return this._[4];
        });
        
        d(p, "atkRatio", function() {
            return this._[5];
        });
        
        d(p, "defRatio", function() {
            return this._[6];
        });
        
        d(p, "hpRatio", function() {
            return this._[7];
        });
        
        d(p, "actions", function() {
            return this._[8];
        });
        
        d(p, "scale", function() {
            return this._[9];
        });
        
        d(p, "hitStateType", function() {
            return this._[10];
        });
        
        d(p, "areaType", function() {
            return this._[11];
        });
        
        d(p, "areaParams", function() {
            return this._[12];
        });
        
        d(p, "upPartRes", function() {
            return this._[13];
        });
        
        d(p, "downPartRes", function() {
            return this._[14];
        });
        
        d(p, "shadow", function() {
            return this._[15];
        });
        
        d(p, "shadowParams", function() {
            return this._[16];
        });
        
        d(p, "skillids", function() {
            return this._[17];
        });
        
        d(p, "attackTiming", function() {
            return this._[18];
        });
        
        d(p, "gap", function() {
            return this._[19];
        });
        
        d(p, "bounds", function() {
            return this._[20];
        });
        
        return Monster;
    }());
    Data.Monster = Monster;
    
    var Msg = (function() {
        function Msg(obj) {
            this.obj = obj;
        }
        var p = Msg.prototype;
        objd(p);
        
        d(p, "idx", function() {
            return this._[0];
        });
        
        d(p, "text", function() {
            return this._[1];
        });
        
        d(p, "region0", function() {
            return this._[2];
        });
        
        return Msg;
    }());
    Data.Msg = Msg;
    
    var NewbieRewardConf = (function() {
        function NewbieRewardConf(obj) {
            this.obj = obj;
        }
        var p = NewbieRewardConf.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "openCondition", function() {
            return this._[1];
        });
        
        d(p, "finishCondition", function() {
            return this._[2];
        });
        
        d(p, "icon", function() {
            return this._[3];
        });
        
        d(p, "title", function() {
            return this._[4];
        });
        
        d(p, "buddleTips", function() {
            return this._[5];
        });
        
        d(p, "nextDay", function() {
            return this._[6];
        });
        
        d(p, "ani", function() {
            return this._[7];
        });
        
        return NewbieRewardConf;
    }());
    Data.NewbieRewardConf = NewbieRewardConf;
    
    var OnlineRewardConf = (function() {
        function OnlineRewardConf(obj) {
            this.obj = obj;
        }
        var p = OnlineRewardConf.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "groupId", function() {
            return this._[1];
        });
        
        d(p, "onlineMinutes", function() {
            return this._[2];
        });
        
        d(p, "doingDesc", function() {
            return this._[3];
        });
        
        d(p, "awards", function() {
            var obj = this._[4];
            var len = obj.length;
            var arr = [];
            for (var i = 0; i < len; i++) {
                arr.push(new ItemInfo(obj[i]));
            }
            return arr;
        });
        
        return OnlineRewardConf;
    }());
    Data.OnlineRewardConf = OnlineRewardConf;
    
    var OpenConf = (function() {
        function OpenConf(obj) {
            this.obj = obj;
        }
        var p = OpenConf.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "key", function() {
            return this._[1];
        });
        
        d(p, "sys", function() {
            return this._[2];
        });
        
        d(p, "icon", function() {
            return this._[3];
        });
        
        d(p, "moduleOpenId", function() {
            return this._[4];
        });
        
        d(p, "helpIds", function() {
            return this._[5];
        });
        
        return OpenConf;
    }());
    Data.OpenConf = OpenConf;
    
    var PropGain = (function() {
        function PropGain(obj) {
            this.obj = obj;
        }
        var p = PropGain.prototype;
        objd(p);
        
        d(p, "type", function() {
            return this._[0];
        });
        
        d(p, "value", function() {
            return this._[1];
        });
        
        return PropGain;
    }());
    Data.PropGain = PropGain;
    
    var PropInfo = (function() {
        function PropInfo(obj) {
            this.obj = obj;
        }
        var p = PropInfo.prototype;
        objd(p);
        
        d(p, "key", function() {
            return this._[0];
        });
        
        d(p, "value", function() {
            return this._[1];
        });
        
        return PropInfo;
    }());
    Data.PropInfo = PropInfo;
    
    var Property = (function() {
        function Property(obj) {
            this.obj = obj;
        }
        var p = Property.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "name", function() {
            return this._[1];
        });
        
        d(p, "displayDes", function() {
            return this._[2];
        });
        
        d(p, "efficiency", function() {
            var obj = this._[3];
            var len = obj.length;
            var arr = [];
            for (var i = 0; i < len; i++) {
                arr.push(new PropGain(obj[i]));
            }
            return arr;
        });
        
        d(p, "type", function() {
            return this._[4];
        });
        
        d(p, "valType", function() {
            return this._[5];
        });
        
        return Property;
    }());
    Data.Property = Property;
    
    var RankRewardConf = (function() {
        function RankRewardConf(obj) {
            this.obj = obj;
        }
        var p = RankRewardConf.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "type", function() {
            return this._[1];
        });
        
        d(p, "startRank", function() {
            return this._[2];
        });
        
        d(p, "endRank", function() {
            return this._[3];
        });
        
        d(p, "reward", function() {
            return new PropInfo(this._[4]);
        });
        
        return RankRewardConf;
    }());
    Data.RankRewardConf = RankRewardConf;
    
    var RatioRankRewardConf = (function() {
        function RatioRankRewardConf(obj) {
            this.obj = obj;
        }
        var p = RatioRankRewardConf.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "type", function() {
            return this._[1];
        });
        
        d(p, "startRank", function() {
            return this._[2];
        });
        
        d(p, "endRank", function() {
            return this._[3];
        });
        
        d(p, "reward", function() {
            return new PropInfo(this._[4]);
        });
        
        return RatioRankRewardConf;
    }());
    Data.RatioRankRewardConf = RatioRankRewardConf;
    
    var ResearchConf = (function() {
        function ResearchConf(obj) {
            this.obj = obj;
        }
        var p = ResearchConf.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "type", function() {
            return this._[1];
        });
        
        d(p, "itemId", function() {
            return this._[2];
        });
        
        d(p, "desc", function() {
            return this._[3];
        });
        
        d(p, "consume", function() {
            var obj = this._[4];
            var len = obj.length;
            var arr = [];
            for (var i = 0; i < len; i++) {
                arr.push(new ItemInfo(obj[i]));
            }
            return arr;
        });
        
        return ResearchConf;
    }());
    Data.ResearchConf = ResearchConf;
    
    var ResearchInstituteConf = (function() {
        function ResearchInstituteConf(obj) {
            this.obj = obj;
        }
        var p = ResearchInstituteConf.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "researchId", function() {
            return this._[1];
        });
        
        d(p, "type", function() {
            return this._[2];
        });
        
        d(p, "lv", function() {
            return this._[3];
        });
        
        d(p, "num", function() {
            return new PropInfo(this._[4]);
        });
        
        d(p, "gain", function() {
            return this._[5];
        });
        
        d(p, "condition", function() {
            return new Condition(this._[6]);
        });
        
        return ResearchInstituteConf;
    }());
    Data.ResearchInstituteConf = ResearchInstituteConf;
    
    var ResearchInstituteTypeConf = (function() {
        function ResearchInstituteTypeConf(obj) {
            this.obj = obj;
        }
        var p = ResearchInstituteTypeConf.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "icon", function() {
            return this._[1];
        });
        
        d(p, "name", function() {
            return this._[2];
        });
        
        d(p, "type", function() {
            return this._[3];
        });
        
        return ResearchInstituteTypeConf;
    }());
    Data.ResearchInstituteTypeConf = ResearchInstituteTypeConf;
    
    var SevenDayConf = (function() {
        function SevenDayConf(obj) {
            this.obj = obj;
        }
        var p = SevenDayConf.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "day", function() {
            return this._[1];
        });
        
        d(p, "desc", function() {
            return this._[2];
        });
        
        d(p, "reward", function() {
            return new PropInfo(this._[3]);
        });
        
        return SevenDayConf;
    }());
    Data.SevenDayConf = SevenDayConf;
    
    var SevenDayExtraConf = (function() {
        function SevenDayExtraConf(obj) {
            this.obj = obj;
        }
        var p = SevenDayExtraConf.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "day", function() {
            return this._[1];
        });
        
        d(p, "desc", function() {
            return this._[2];
        });
        
        d(p, "reward", function() {
            return new PropInfo(this._[3]);
        });
        
        return SevenDayExtraConf;
    }());
    Data.SevenDayExtraConf = SevenDayExtraConf;
    
    var Skill = (function() {
        function Skill(obj) {
            this.obj = obj;
        }
        var p = Skill.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "name", function() {
            return this._[1];
        });
        
        d(p, "cd", function() {
            return this._[2];
        });
        
        d(p, "opType", function() {
            return this._[3];
        });
        
        d(p, "gunfire", function() {
            return this._[4];
        });
        
        d(p, "res", function() {
            return this._[5];
        });
        
        d(p, "preeffect", function() {
            return this._[6];
        });
        
        d(p, "bombEffect", function() {
            return this._[7];
        });
        
        d(p, "speed", function() {
            return this._[8];
        });
        
        d(p, "shootPos", function() {
            var obj = this._[9];
            var len = obj.length;
            var arr = [];
            for (var i = 0; i < len; i++) {
                arr.push(new PropInfo(obj[i]));
            }
            return arr;
        });
        
        d(p, "angle", function() {
            return this._[10];
        });
        
        d(p, "bulletNum", function() {
            return this._[11];
        });
        
        d(p, "interval", function() {
            return this._[12];
        });
        
        d(p, "duration", function() {
            return this._[13];
        });
        
        d(p, "areaType", function() {
            return this._[14];
        });
        
        d(p, "areaParams", function() {
            return this._[15];
        });
        
        d(p, "hurtInterval", function() {
            return this._[16];
        });
        
        d(p, "tail", function() {
            return this._[17];
        });
        
        d(p, "soundIds", function() {
            return this._[18];
        });
        
        d(p, "hurtSoundIds", function() {
            return this._[19];
        });
        
        d(p, "bulletHurt", function() {
            return this._[20];
        });
        
        d(p, "resScale", function() {
            return this._[21];
        });
        
        d(p, "boomScale", function() {
            return this._[22];
        });
        
        return Skill;
    }());
    Data.Skill = Skill;
    
    var Sound = (function() {
        function Sound(obj) {
            this.obj = obj;
        }
        var p = Sound.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "soundType", function() {
            return this._[1];
        });
        
        d(p, "volumeSize", function() {
            return this._[2];
        });
        
        d(p, "soundResource", function() {
            return this._[3];
        });
        
        d(p, "loop", function() {
            return this._[4];
        });
        
        d(p, "delayTime", function() {
            return this._[5];
        });
        
        d(p, "fadeIn", function() {
            return this._[6];
        });
        
        d(p, "fadeOut", function() {
            return this._[7];
        });
        
        d(p, "priority", function() {
            return this._[8];
        });
        
        return Sound;
    }());
    Data.Sound = Sound;
    
    var SoundCommon = (function() {
        function SoundCommon(obj) {
            this.obj = obj;
        }
        var p = SoundCommon.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "key", function() {
            return this._[1];
        });
        
        d(p, "soundIds", function() {
            return this._[2];
        });
        
        return SoundCommon;
    }());
    Data.SoundCommon = SoundCommon;
    
    var SoundSuppress = (function() {
        function SoundSuppress(obj) {
            this.obj = obj;
        }
        var p = SoundSuppress.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "type", function() {
            return this._[1];
        });
        
        d(p, "suppress", function() {
            return this._[2];
        });
        
        d(p, "attackTime", function() {
            return this._[3];
        });
        
        d(p, "ratio", function() {
            return this._[4];
        });
        
        d(p, "releaseTime", function() {
            return this._[5];
        });
        
        return SoundSuppress;
    }());
    Data.SoundSuppress = SoundSuppress;
    
    var SoundType = (function() {
        function SoundType(obj) {
            this.obj = obj;
        }
        var p = SoundType.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "priority", function() {
            return this._[1];
        });
        
        d(p, "instance", function() {
            return this._[2];
        });
        
        d(p, "path", function() {
            return this._[3];
        });
        
        d(p, "period", function() {
            return this._[4];
        });
        
        d(p, "replaceable", function() {
            return this._[5];
        });
        
        d(p, "detectPriority", function() {
            return this._[6];
        });
        
        return SoundType;
    }());
    Data.SoundType = SoundType;
    
    var SpeedUp = (function() {
        function SpeedUp(obj) {
            this.obj = obj;
        }
        var p = SpeedUp.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "type", function() {
            return this._[1];
        });
        
        d(p, "name", function() {
            return this._[2];
        });
        
        d(p, "rawEgg", function() {
            return this._[3];
        });
        
        d(p, "autoFusion", function() {
            return this._[4];
        });
        
        d(p, "autoHatch", function() {
            return this._[5];
        });
        
        d(p, "slowEgg", function() {
            return this._[6];
        });
        
        d(p, "lastTime", function() {
            return this._[7];
        });
        
        d(p, "accuTotalTime", function() {
            return this._[8];
        });
        
        d(p, "maxUseTimes", function() {
            return this._[9];
        });
        
        d(p, "consume", function() {
            var obj = this._[10];
            var len = obj.length;
            var arr = [];
            for (var i = 0; i < len; i++) {
                arr.push(new ItemInfo(obj[i]));
            }
            return arr;
        });
        
        return SpeedUp;
    }());
    Data.SpeedUp = SpeedUp;
    
    var SummonedConf = (function() {
        function SummonedConf(obj) {
            this.obj = obj;
        }
        var p = SummonedConf.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "type", function() {
            return this._[1];
        });
        
        d(p, "model", function() {
            return this._[2];
        });
        
        d(p, "modelType", function() {
            return this._[3];
        });
        
        d(p, "actions", function() {
            return this._[4];
        });
        
        d(p, "scale", function() {
            return this._[5];
        });
        
        d(p, "hitStateType", function() {
            return this._[6];
        });
        
        d(p, "explodeRes", function() {
            return this._[7];
        });
        
        d(p, "atkRatio", function() {
            return this._[8];
        });
        
        d(p, "defRatio", function() {
            return this._[9];
        });
        
        d(p, "HPRatio", function() {
            return this._[10];
        });
        
        d(p, "areaType", function() {
            return this._[11];
        });
        
        d(p, "areaParams", function() {
            return this._[12];
        });
        
        d(p, "damageRatio", function() {
            return this._[13];
        });
        
        d(p, "atk", function() {
            return this._[14];
        });
        
        return SummonedConf;
    }());
    Data.SummonedConf = SummonedConf;
    
    var TaskConf = (function() {
        function TaskConf(obj) {
            this.obj = obj;
        }
        var p = TaskConf.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "type", function() {
            return this._[1];
        });
        
        d(p, "subType", function() {
            return this._[2];
        });
        
        d(p, "order", function() {
            return this._[3];
        });
        
        d(p, "condition", function() {
            return new Condition(this._[4]);
        });
        
        d(p, "awards", function() {
            return this._[5];
        });
        
        d(p, "openCondition", function() {
            return new Condition(this._[6]);
        });
        
        d(p, "linkTo", function() {
            return this._[7];
        });
        
        d(p, "liveness", function() {
            return this._[8];
        });
        
        return TaskConf;
    }());
    Data.TaskConf = TaskConf;
    
    var TicketConf = (function() {
        function TicketConf(obj) {
            this.obj = obj;
        }
        var p = TicketConf.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "max", function() {
            return this._[1];
        });
        
        d(p, "coolDown", function() {
            return this._[2];
        });
        
        d(p, "shareType", function() {
            return this._[3];
        });
        
        d(p, "cost", function() {
            var obj = this._[4];
            var len = obj.length;
            var arr = [];
            for (var i = 0; i < len; i++) {
                arr.push(new ItemInfo(obj[i]));
            }
            return arr;
        });
        
        return TicketConf;
    }());
    Data.TicketConf = TicketConf;
    
    var TutorialConf = (function() {
        function TutorialConf(obj) {
            this.obj = obj;
        }
        var p = TutorialConf.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "section", function() {
            return this._[1];
        });
        
        d(p, "force", function() {
            return this._[2];
        });
        
        d(p, "screenMask", function() {
            return this._[3];
        });
        
        d(p, "speakIndex", function() {
            return this._[4];
        });
        
        d(p, "schedule", function() {
            return this._[5];
        });
        
        d(p, "guideid", function() {
            return this._[6];
        });
        
        d(p, "type", function() {
            return this._[7];
        });
        
        d(p, "offset", function() {
            return this._[8];
        });
        
        d(p, "taskId", function() {
            return this._[9];
        });
        
        return TutorialConf;
    }());
    Data.TutorialConf = TutorialConf;
    
    var Vip = (function() {
        function Vip(obj) {
            this.obj = obj;
        }
        var p = Vip.prototype;
        objd(p);
        
        d(p, "level", function() {
            return this._[0];
        });
        
        d(p, "needRmb", function() {
            return this._[1];
        });
        
        d(p, "gifts", function() {
            var obj = this._[2];
            var len = obj.length;
            var arr = [];
            for (var i = 0; i < len; i++) {
                arr.push(new ItemInfo(obj[i]));
            }
            return arr;
        });
        
        d(p, "vipRightIds", function() {
            return this._[3];
        });
        
        d(p, "mainShow", function() {
            return new PropInfo(this._[4]);
        });
        
        d(p, "dailyGifts", function() {
            var obj = this._[5];
            var len = obj.length;
            var arr = [];
            for (var i = 0; i < len; i++) {
                arr.push(new ItemInfo(obj[i]));
            }
            return arr;
        });
        
        d(p, "vipIcon", function() {
            return this._[6];
        });
        
        return Vip;
    }());
    Data.Vip = Vip;
    
    var VipRightDesc = (function() {
        function VipRightDesc(obj) {
            this.obj = obj;
        }
        var p = VipRightDesc.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "descIcon", function() {
            return this._[1];
        });
        
        d(p, "desc", function() {
            return this._[2];
        });
        
        return VipRightDesc;
    }());
    Data.VipRightDesc = VipRightDesc;
    
    var VipRights = (function() {
        function VipRights(obj) {
            this.obj = obj;
        }
        var p = VipRights.prototype;
        objd(p);
        
        d(p, "id", function() {
            return this._[0];
        });
        
        d(p, "vip", function() {
            return this._[1];
        });
        
        d(p, "rightId", function() {
            return this._[2];
        });
        
        d(p, "value", function() {
            return this._[3];
        });
        
        d(p, "isShow", function() {
            return this._[4];
        });
        
        return VipRights;
    }());
    Data.VipRights = VipRights;
    

    function _getData(collection, dataType) {
        return function(index) {
            var t = collection[index];
            if (t instanceof dataType)
                return t;
            if (!t)
                return t;
            var obj = new dataType(t);
            collection[index] = obj;
            return obj;
        }
    }

    function _buildGetter() {
        
        if (Data.copys) Data.getCopy = _getData(Data.copys, Data.Copy);
        
        
        if (Data.dragons) Data.getDragon = _getData(Data.dragons, Data.Dragon);
        
        
        if (Data.eliteFuseFormula) Data.getEliteFuseFormula = _getData(Data.eliteFuseFormula, Data.EliteFuseFormula);
        
        
        if (Data.skills) Data.getSkill = _getData(Data.skills, Data.Skill);
        
        
        if (Data.items) Data.getItem = _getData(Data.items, Data.Item);
        
        
        if (Data.dragonExtra) Data.getDragonExtra = _getData(Data.dragonExtra, Data.DragonExtra);
        
        
        if (Data.dragonMaxLevel) Data.getDragonMaxLevel = _getData(Data.dragonMaxLevel, Data.DragonMaxLevel);
        
        
        if (Data.enhances) Data.getDragonEnhance = _getData(Data.enhances, Data.DragonEnhance);
        
        
        if (Data.monster) Data.getMonster = _getData(Data.monster, Data.Monster);
        
        
        if (Data.properties) Data.getProperty = _getData(Data.properties, Data.Property);
        
        
        if (Data.msgCodes) Data.getMsg = _getData(Data.msgCodes, Data.Msg);
        
        
        if (Data.speedUp) Data.getSpeedUp = _getData(Data.speedUp, Data.SpeedUp);
        
        
        if (Data.dragonInfos) Data.getDragonInfoConf = _getData(Data.dragonInfos, Data.DragonInfoConf);
        
        
        if (Data.gamecondition) Data.getGameCondition = _getData(Data.gamecondition, Data.GameCondition);
        
        
        if (Data.gameconditionsubtype) Data.getGameConditionSubType = _getData(Data.gameconditionsubtype, Data.GameConditionSubType);
        
        
        if (Data.levelRewardConf) Data.getLevelRewardConf = _getData(Data.levelRewardConf, Data.LevelRewardConf);
        
        
        if (Data.rankrewardconf) Data.getRankRewardConf = _getData(Data.rankrewardconf, Data.RankRewardConf);
        
        
        if (Data.ratiorankrewardconf) Data.getRatioRankRewardConf = _getData(Data.ratiorankrewardconf, Data.RatioRankRewardConf);
        
        
        if (Data.taskConf) Data.getTaskConf = _getData(Data.taskConf, Data.TaskConf);
        
        
        if (Data.livenessConf) Data.getLivenessConf = _getData(Data.livenessConf, Data.LivenessConf);
        
        
        if (Data.researchConf) Data.getResearchConf = _getData(Data.researchConf, Data.ResearchConf);
        
        
        if (Data.sevendayconf) Data.getSevenDayConf = _getData(Data.sevendayconf, Data.SevenDayConf);
        
        
        if (Data.sevendayextraconf) Data.getSevenDayExtraConf = _getData(Data.sevendayextraconf, Data.SevenDayExtraConf);
        
        
        if (Data.tutorialconf) Data.getTutorialConf = _getData(Data.tutorialconf, Data.TutorialConf);
        
        
        if (Data.onlinerewardconf) Data.getOnlineRewardConf = _getData(Data.onlinerewardconf, Data.OnlineRewardConf);
        
        
        if (Data.newbierewardconf) Data.getNewbieRewardConf = _getData(Data.newbierewardconf, Data.NewbieRewardConf);
        
        
        if (Data.dailyBossConf) Data.getDailyBossConf = _getData(Data.dailyBossConf, Data.DailyBossConf);
        
        
        if (Data.dailyBossInfoConf) Data.getDailyBossInfoConf = _getData(Data.dailyBossInfoConf, Data.DailyBossInfoConf);
        
        
        if (Data.TicketsConf) Data.getTicketConf = _getData(Data.TicketsConf, Data.TicketConf);
        
        
        if (Data.legendaryBossRankRewardConf) Data.getLegendaryBossRankReward = _getData(Data.legendaryBossRankRewardConf, Data.LegendaryBossRankReward);
        
        
        if (Data.LinkpanelConfs) Data.getLinkpanelConf = _getData(Data.LinkpanelConfs, Data.LinkpanelConf);
        
        
        if (Data.LinkToConfs) Data.getLinkToConf = _getData(Data.LinkToConfs, Data.LinkToConf);
        
        
        if (Data.sounds) Data.getSound = _getData(Data.sounds, Data.Sound);
        
        
        if (Data.soundCommons) Data.getSoundCommon = _getData(Data.soundCommons, Data.SoundCommon);
        
        
        if (Data.soundTypes) Data.getSoundType = _getData(Data.soundTypes, Data.SoundType);
        
        
        if (Data.soundSuppresses) Data.getSoundSuppress = _getData(Data.soundSuppresses, Data.SoundSuppress);
        
        
        if (Data.moduleOpen) Data.getModuleOpenConf = _getData(Data.moduleOpen, Data.ModuleOpenConf);
        
        
        if (Data.openConf) Data.getOpenConf = _getData(Data.openConf, Data.OpenConf);
        
        
        if (Data.summonedConf) Data.getSummonedConf = _getData(Data.summonedConf, Data.SummonedConf);
        
        
        if (Data.loadingTipsConf) Data.getLoadingTipsConf = _getData(Data.loadingTipsConf, Data.LoadingTipsConf);
        
        
        if (Data.chatSysConf) Data.getChatSysConf = _getData(Data.chatSysConf, Data.ChatSysConf);
        
        
        if (Data.chatEmojiConf) Data.getChatEmojiConf = _getData(Data.chatEmojiConf, Data.ChatEmojiConf);
        
        
        if (Data.helpConf) Data.getHelpConf = _getData(Data.helpConf, Data.HelpConf);
        
        
        if (Data.researchInstituteConfs) Data.getResearchInstituteConf = _getData(Data.researchInstituteConfs, Data.ResearchInstituteConf);
        
        
        if (Data.researchInstituteTypeConfs) Data.getResearchInstituteTypeConf = _getData(Data.researchInstituteTypeConfs, Data.ResearchInstituteTypeConf);
        
        
        if (Data.geneagentConfs) Data.getGeneagentConf = _getData(Data.geneagentConfs, Data.GeneagentConf);
        
        
        if (Data.geneagentLevelConfs) Data.getGeneagentLevelConf = _getData(Data.geneagentLevelConfs, Data.GeneagentLevelConf);
        
        
        if (Data.arenarewardconfs) Data.getArenaRewardConf = _getData(Data.arenarewardconfs, Data.ArenaRewardConf);
        
        
        if (Data.bestrankingconfs) Data.getBestRankingConf = _getData(Data.bestrankingconfs, Data.BestRankingConf);
        
        
        if (Data.achievementconfs) Data.getAchievementConf = _getData(Data.achievementconfs, Data.AchievementConf);
        
        
        if (Data.dietipsconfs) Data.getDieTipsConf = _getData(Data.dietipsconfs, Data.DieTipsConf);
        
        
        if (Data.vips) Data.getVip = _getData(Data.vips, Data.Vip);
        
        
        if (Data.freshBoxs) Data.getFreshBox = _getData(Data.freshBoxs, Data.FreshBox);
        
        
        if (Data.ads) Data.getAd = _getData(Data.ads, Data.Ad);
        
        
        if (Data.vipRights) Data.getVipRights = _getData(Data.vipRights, Data.VipRights);
        
        
        if (Data.vipRightDescs) Data.getVipRightDesc = _getData(Data.vipRightDescs, Data.VipRightDesc);
        
    }



    var buildData = function(data) {
        var arrmap = data.__arrmap__ || {};
        delete data.__arrmap__;
        

        for (var key in data) {
            Data[key] = data[key];
        }
        _buildGetter(data);
    }
    Data.buildData = buildData;
})(Data || (Data = {}));
