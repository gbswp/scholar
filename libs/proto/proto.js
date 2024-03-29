// auto generated, do not edit

var pb = dcodeIO.ProtoBuf.newBuilder({"populateAccessors": false})['import']({
    "package": "pb",
    "syntax": "proto3",
    "messages": [
        {
            "name": "ComposeDataAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "idx",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "ErrorAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "code",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "message",
                    "id": 2
                }
            ]
        },
        {
            "name": "PropInfo",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "key",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "value",
                    "id": 2
                }
            ]
        },
        {
            "name": "PropInfoF",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "key",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "float",
                    "name": "value",
                    "id": 2
                }
            ]
        },
        {
            "name": "DragonUnit",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "star",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "num",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "combat",
                    "id": 3
                },
                {
                    "rule": "map",
                    "type": "double",
                    "keytype": "int32",
                    "name": "props",
                    "id": 4
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "skills",
                    "id": 5,
                    "options": {
                        "packed": true
                    }
                }
            ]
        },
        {
            "name": "DragonInfo",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "index",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "exp",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "lvl",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "combat",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "enhanceLvls",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "effectDesc",
                    "id": 6
                },
                {
                    "rule": "repeated",
                    "type": "DragonUnit",
                    "name": "units",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "lvUpCost",
                    "id": 8
                }
            ]
        },
        {
            "name": "DragonTeamMember",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "index",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "star",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "posX",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "posY",
                    "id": 5
                },
                {
                    "rule": "map",
                    "type": "double",
                    "keytype": "int32",
                    "name": "props",
                    "id": 6
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "skills",
                    "id": 7,
                    "options": {
                        "packed": true
                    }
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "combat",
                    "id": 8
                }
            ]
        },
        {
            "name": "DragonTeam",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "teamType",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "combat",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "DragonTeamMember",
                    "name": "members",
                    "id": 3
                }
            ]
        },
        {
            "name": "TeamMemberUpdate",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "teamType",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "DragonTeamMember",
                    "name": "teamMember",
                    "id": 2
                }
            ]
        },
        {
            "name": "DragonEnhance",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "lvl",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "unlockStar",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "desc",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "double",
                    "name": "curRatio",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "double",
                    "name": "nextRatio",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "curPlus",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "nextPlus",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "ItemInfo",
                    "name": "cost",
                    "id": 9
                }
            ]
        },
        {
            "name": "DragonEffect",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "desc",
                    "id": 1
                }
            ]
        },
        {
            "name": "MonsterInfo",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "index",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "model",
                    "id": 2
                },
                {
                    "rule": "map",
                    "type": "int64",
                    "keytype": "int32",
                    "name": "props",
                    "id": 3
                }
            ]
        },
        {
            "name": "TeamMonster",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "PropInfo",
                    "name": "MonsterProps",
                    "id": 1
                }
            ]
        },
        {
            "name": "WaveInfo",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "TeamMonster",
                    "name": "monsters",
                    "id": 1
                }
            ]
        },
        {
            "name": "StageInfo",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "index",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "WaveInfo",
                    "name": "waves",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "MonsterInfo",
                    "name": "monsters",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "isStop",
                    "id": 4
                }
            ]
        },
        {
            "name": "ItemInfo",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "index",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "num",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "delta",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "tag",
                    "id": 4
                }
            ]
        },
        {
            "name": "ItemDeltaInfo",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "index",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "delta",
                    "id": 2
                }
            ]
        },
        {
            "name": "Reward",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "ItemDeltaInfo",
                    "name": "items",
                    "id": 2
                }
            ]
        },
        {
            "name": "Condition",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "k",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "v",
                    "id": 2
                },
                {
                    "rule": "map",
                    "type": "int32",
                    "keytype": "int32",
                    "name": "subs",
                    "id": 3
                }
            ]
        },
        {
            "name": "ConditionNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "map",
                    "type": "int32",
                    "keytype": "int32",
                    "name": "monolayers",
                    "id": 1
                },
                {
                    "rule": "map",
                    "type": "ConditionSub",
                    "keytype": "int32",
                    "name": "bilayers",
                    "id": 2
                }
            ]
        },
        {
            "name": "ConditionSub",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "map",
                    "type": "int32",
                    "keytype": "int32",
                    "name": "values",
                    "id": 1
                }
            ]
        },
        {
            "name": "TaskDetail",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "name",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "note",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "Reward",
                    "name": "awards",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "Condition",
                    "name": "condition",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "Condition",
                    "name": "openCondition",
                    "id": 5
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "linkTo",
                    "id": 6,
                    "options": {
                        "packed": true
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "liveness",
                    "id": 7
                }
            ]
        },
        {
            "name": "TaskInfo",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "taskId",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "status",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "TaskDetail",
                    "name": "detail",
                    "id": 3
                }
            ]
        },
        {
            "name": "TaskInfosNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "TaskInfo",
                    "name": "main",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "TaskInfo",
                    "name": "achieve",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "TaskInfo",
                    "name": "daily",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "TaskInfo",
                    "name": "loop",
                    "id": 4
                }
            ]
        },
        {
            "name": "FinishTaskReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "taskId",
                    "id": 1
                }
            ]
        },
        {
            "name": "TaskUpdateUnit",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "TaskInfo",
                    "name": "oldTask",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "TaskInfo",
                    "name": "newTask",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "type",
                    "id": 3
                }
            ]
        },
        {
            "name": "TaskUpdateNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "TaskUpdateUnit",
                    "name": "tasks",
                    "id": 1
                }
            ]
        },
        {
            "name": "FinishTaskAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "ItemDeltaInfo",
                    "name": "items",
                    "id": 1
                }
            ]
        },
        {
            "name": "UserPTProfileRpt",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "name",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "avatar",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "gender",
                    "id": 3
                }
            ]
        },
        {
            "name": "HeadPicChangeReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "tp",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "newAvatar",
                    "id": 2
                }
            ]
        },
        {
            "name": "HeadPicChangeAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "result",
                    "id": 1
                }
            ]
        },
        {
            "name": "LivenessNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "value",
                    "id": 1
                },
                {
                    "rule": "map",
                    "type": "int32",
                    "keytype": "int32",
                    "name": "state",
                    "id": 2
                }
            ]
        },
        {
            "name": "LivenessAwardReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                }
            ]
        },
        {
            "name": "LivenessAwardAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "result",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "ItemDeltaInfo",
                    "name": "items",
                    "id": 2
                }
            ]
        },
        {
            "name": "GiftOpenNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "tp",
                    "id": 1
                }
            ]
        },
        {
            "name": "DragonPiecesCombineReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                }
            ]
        },
        {
            "name": "DragonPiecesCombineAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "result",
                    "id": 1
                }
            ]
        },
        {
            "name": "ItemInfoProb",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "itemId",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "count",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "prob",
                    "id": 3
                }
            ]
        },
        {
            "name": "WaveItem",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "wave",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "count",
                    "id": 3
                }
            ]
        },
        {
            "name": "Item",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "itemId",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "count",
                    "id": 2
                }
            ]
        },
        {
            "name": "RefreshTicketRpt",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "UserSimpleInfo",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "guildIcon",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "rank",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "userName",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "damage",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "avatar",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "vipLvl",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "lvl",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "serverId",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "loginTime",
                    "id": 10
                }
            ]
        },
        {
            "name": "ActivityBaseInfo",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "type",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "uiType",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "title",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "help",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "desc",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "icon",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "banner",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bannerInner",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "startTime",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "endTime",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "order",
                    "id": 12
                },
                {
                    "rule": "repeated",
                    "type": "Condition",
                    "name": "joinConditions",
                    "id": 13
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "dynamicValues",
                    "id": 14,
                    "options": {
                        "packed": true
                    }
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "imageTitle",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "outRect",
                    "id": 16
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "innerRect",
                    "id": 17
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "showUI",
                    "id": 18
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "tips",
                    "id": 19
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "showBtn",
                    "id": 20
                }
            ]
        },
        {
            "name": "ActivityLuckyTurntableTable",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "activityId",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "lotteryType",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "ItemInfoProb",
                    "name": "awardPool",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "ItemInfoProb",
                    "name": "awardShowIds",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "ItemInfo",
                    "name": "OneCost",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "ItemInfo",
                    "name": "TenCost",
                    "id": 6
                },
                {
                    "rule": "repeated",
                    "type": "WaveItem",
                    "name": "countAwards",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "rateDesc",
                    "id": 8
                },
                {
                    "rule": "repeated",
                    "type": "ItemInfo",
                    "name": "showItemId",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "WaveItem",
                    "name": "firstNAward",
                    "id": 10
                },
                {
                    "rule": "repeated",
                    "type": "ItemInfo",
                    "name": "everyNAward",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "everyN",
                    "id": 12
                },
                {
                    "rule": "repeated",
                    "type": "ItemInfo",
                    "name": "baseItems",
                    "id": 13
                }
            ]
        },
        {
            "name": "ActivityMonthCardTable",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "price",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "monthCardType",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "openDays",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "name",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "desc",
                    "id": 6
                },
                {
                    "rule": "repeated",
                    "type": "ItemInfo",
                    "name": "payAwards",
                    "id": 7
                },
                {
                    "rule": "repeated",
                    "type": "ItemInfo",
                    "name": "dailyAwards",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "icon",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "price1",
                    "id": 10
                }
            ]
        },
        {
            "name": "HeroCompose",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "Item",
                    "name": "dragonItem",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "pool",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "type",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "weight",
                    "id": 4
                }
            ]
        },
        {
            "name": "ActivityHeroComposeFormula",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "formulaid",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "activityId",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "ItemInfo",
                    "name": "material",
                    "id": 4
                },
                {
                    "rule": "repeated",
                    "type": "ItemInfo",
                    "name": "material2",
                    "id": 5
                },
                {
                    "rule": "repeated",
                    "type": "ItemInfo",
                    "name": "reward",
                    "id": 6
                },
                {
                    "rule": "repeated",
                    "type": "HeroCompose",
                    "name": "heroComposes",
                    "id": 7
                }
            ]
        },
        {
            "name": "ActivityInfo",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "ActivityBaseInfo",
                    "name": "activityInfo",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "ActivityLuckyTurntableTable",
                    "name": "luckyTurntableInfo",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "ActivityMonthCardTable",
                    "name": "monthCardTableInfo",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "ActivityHeroComposeFormula",
                    "name": "heroComposeFormula",
                    "id": 4
                }
            ]
        },
        {
            "name": "ActivityLoadReq",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "ActivityLoadAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "ActivityInfo",
                    "name": "confs",
                    "id": 1
                }
            ]
        },
        {
            "name": "ActivityChangeNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "ActivityInfo",
                    "name": "confs",
                    "id": 1
                }
            ]
        },
        {
            "name": "ActivityHeroComposeLoadReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "activityId",
                    "id": 1
                }
            ]
        },
        {
            "name": "ActivityHeroComposeLoadAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "count",
                    "id": 1
                }
            ]
        },
        {
            "name": "ActivityHeroComposeReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "activityId",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "type",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "consumeType",
                    "id": 3
                }
            ]
        },
        {
            "name": "ActivityHeroComposeAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "DragonInfo",
                    "name": "dragons",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "PropInfo",
                    "name": "reduceInfo",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "TeamMemberUpdate",
                    "name": "memberUpdate",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "showHoldDragonId",
                    "id": 4
                },
                {
                    "rule": "repeated",
                    "type": "ItemDeltaInfo",
                    "name": "iteminfo",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "dragonItemId",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "count",
                    "id": 7
                }
            ]
        },
        {
            "name": "LuckyTurntableRecord",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "nickname",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "luckyTurntableTime",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "Item",
                    "name": "item",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "vip",
                    "id": 4
                }
            ]
        },
        {
            "name": "ActivityLuckyTurntableLoadReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "activityId",
                    "id": 1
                }
            ]
        },
        {
            "name": "ActivityLuckyTurntableLoadAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "drawCount",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "LuckyTurntableRecord",
                    "name": "ownRecord",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "LuckyTurntableRecord",
                    "name": "serverRecord",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "gotIds",
                    "id": 4,
                    "options": {
                        "packed": true
                    }
                }
            ]
        },
        {
            "name": "ActivityLuckyTurntableDoReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "times",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "activityId",
                    "id": 2
                }
            ]
        },
        {
            "name": "ActivityLuckyTurntableDoAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "ItemDeltaInfo",
                    "name": "items",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "LuckyTurntableRecord",
                    "name": "ownRecord",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "index",
                    "id": 3
                }
            ]
        },
        {
            "name": "ActivityLuckyTurntableRecordNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "activityId",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "LuckyTurntableRecord",
                    "name": "record",
                    "id": 2
                }
            ]
        },
        {
            "name": "ActLuckyTurntableExtraAwardReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "activityId",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "rewardId",
                    "id": 2
                }
            ]
        },
        {
            "name": "ActLuckyTurntableExtraAwardAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "gotIds",
                    "id": 1,
                    "options": {
                        "packed": true
                    }
                },
                {
                    "rule": "repeated",
                    "type": "ItemDeltaInfo",
                    "name": "items",
                    "id": 2
                }
            ]
        },
        {
            "name": "AdExtraAwardReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "type",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "params",
                    "id": 2,
                    "options": {
                        "packed": true
                    }
                }
            ]
        },
        {
            "name": "AdExtraAwardAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "ItemDeltaInfo",
                    "name": "changeItemInfo",
                    "id": 1
                }
            ]
        },
        {
            "name": "AdjutantsNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "AdjutantInfo",
                    "name": "infos",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "usedAdjutantId",
                    "id": 2
                }
            ]
        },
        {
            "name": "GainProp",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "double",
                    "name": "ratio",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "plus",
                    "id": 2
                }
            ]
        },
        {
            "name": "AdjutantInfo",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "lvl",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "GainProp",
                    "name": "prop",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "PropInfo",
                    "name": "cost",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "GainProp",
                    "name": "lvlProp",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "name",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "maxLvl",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "Condition",
                    "name": "cond",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "desc",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "icon",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "drawSpine",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "status",
                    "id": 12
                }
            ]
        },
        {
            "name": "AdjutantLvlUpReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                }
            ]
        },
        {
            "name": "AdjutantLvlUpAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "AdjutantInfo",
                    "name": "info",
                    "id": 1
                }
            ]
        },
        {
            "name": "SetAdjutantReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                }
            ]
        },
        {
            "name": "SetAdjutantAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                }
            ]
        },
        {
            "name": "UnlockAdjutantReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                }
            ]
        },
        {
            "name": "UnlockAdjutantAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "status",
                    "id": 2
                }
            ]
        },
        {
            "name": "ArenaBriefUserInfo",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "name",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "lvl",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "vip",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "combat",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "avatar",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "grading",
                    "id": 7
                }
            ]
        },
        {
            "name": "ArenaLoadReq",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "ArenaLoadAck",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "ArenaGetUserReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "type",
                    "id": 1
                }
            ]
        },
        {
            "name": "ArenaGetUserAck",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "ArenaGetRankReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "page",
                    "id": 1
                }
            ]
        },
        {
            "name": "ArenaGetRankAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "page",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "maxPage",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "ArenaBriefUserInfo",
                    "name": "users",
                    "id": 3
                }
            ]
        },
        {
            "name": "ArenaNewRankNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "page",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "maxPage",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "ArenaBriefUserInfo",
                    "name": "users",
                    "id": 3
                }
            ]
        },
        {
            "name": "ArenaBeginReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "enemyRankId",
                    "id": 1
                }
            ]
        },
        {
            "name": "ArenaBeginAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "DragonTeam",
                    "name": "enemyTeam",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "DragonInfo",
                    "name": "dragons",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "ArenaBriefUserInfo",
                    "name": "enemyUser",
                    "id": 3
                }
            ]
        },
        {
            "name": "ArenaEndReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "result",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "enemyUserId",
                    "id": 2
                }
            ]
        },
        {
            "name": "ArenaEndAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "arenaGrading",
                    "id": 1
                }
            ]
        },
        {
            "name": "ArenaCheckReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "enemyRankId",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "enemyUserId",
                    "id": 2
                }
            ]
        },
        {
            "name": "ArenaCheckAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "rankChange",
                    "id": 1
                }
            ]
        },
        {
            "name": "ArenaGetFormatReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "enemyUserId",
                    "id": 1
                }
            ]
        },
        {
            "name": "ArenaGetFormatAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "DragonTeam",
                    "name": "enemyTeam",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "DragonInfo",
                    "name": "dragons",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "combat",
                    "id": 3
                }
            ]
        },
        {
            "name": "ArenaRecordInfo",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "date",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "win",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "status",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "arenaGrading",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "attackUid",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "ArenaBriefUserInfo",
                    "name": "enemyUser",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "gradeHigh",
                    "id": 7
                }
            ]
        },
        {
            "name": "ArenaLoadRecordReq",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "ArenaLoadRecordAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "ArenaRecordInfo",
                    "name": "records",
                    "id": 1
                }
            ]
        },
        {
            "name": "ArenaRankAwardReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                }
            ]
        },
        {
            "name": "ArenaRankAwardAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "ItemDeltaInfo",
                    "name": "reward",
                    "id": 1
                }
            ]
        },
        {
            "name": "ArenaChallengeAwardReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                }
            ]
        },
        {
            "name": "ArenaChallengeAwardAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "ItemDeltaInfo",
                    "name": "reward",
                    "id": 1
                }
            ]
        },
        {
            "name": "ArenaEnemyNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "nextRefreshTime",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "arenaGrading",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "ArenaBriefUserInfo",
                    "name": "arenaUsers",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "isRefresh",
                    "id": 4
                }
            ]
        },
        {
            "name": "ArenaInfoNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "gotIds",
                    "id": 1,
                    "options": {
                        "packed": true
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "maxGrading",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "gotChallengeIds",
                    "id": 3,
                    "options": {
                        "packed": true
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "arenaWinCount",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "seasonStartTime",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "seasonEndTime",
                    "id": 6
                }
            ]
        },
        {
            "name": "EnterCopyReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "copyId",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "startStage",
                    "id": 2
                }
            ]
        },
        {
            "name": "EnterCopyAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "copyId",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "stageRecord",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "StageNtf",
                    "name": "stage",
                    "id": 3
                }
            ]
        },
        {
            "name": "StageEndRpt",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "stageIndex",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "flag",
                    "id": 2
                }
            ]
        },
        {
            "name": "StageEndNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "nextStageIndex",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "usedTime",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "ItemDeltaInfo",
                    "name": "fixAward",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "ItemDeltaInfo",
                    "name": "extraAward",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "ItemDeltaInfo",
                    "name": "breakAward",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "deadCount",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "copyId",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "record",
                    "id": 8
                },
                {
                    "rule": "repeated",
                    "type": "ItemDeltaInfo",
                    "name": "boxAwards",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "stageCount",
                    "id": 10
                }
            ]
        },
        {
            "name": "StageBreakReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "stageIndex",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "tp",
                    "id": 2
                }
            ]
        },
        {
            "name": "StageBreakAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "nextStageIndex",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "Reward",
                    "name": "rewards",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "Reward",
                    "name": "rewardsItem",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "StageNtf",
                    "name": "newStageinfo",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "RandAddStage",
                    "id": 5
                },
                {
                    "rule": "repeated",
                    "type": "ItemDeltaInfo",
                    "name": "boxAwards",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "stageCount",
                    "id": 7
                }
            ]
        },
        {
            "name": "StageNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "copyId",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "StageInfo",
                    "name": "stage",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "timeRecord",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "timeLimit",
                    "id": 4
                }
            ]
        },
        {
            "name": "RegressRewardReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "copyId",
                    "id": 1
                }
            ]
        },
        {
            "name": "RegressRewardAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "ItemDeltaInfo",
                    "name": "items",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "regressRatio",
                    "id": 2
                }
            ]
        },
        {
            "name": "RegressReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "copyId",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "tp",
                    "id": 2
                }
            ]
        },
        {
            "name": "RegressAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "ItemDeltaInfo",
                    "name": "items",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "lastRegressTime",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "regressStartStage",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "dailyADRegress",
                    "id": 4
                }
            ]
        },
        {
            "name": "RegressResetReq",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "RegressResetAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "lastRegressTime",
                    "id": 1
                }
            ]
        },
        {
            "name": "StageAwardBoxNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "stageCount",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "ItemDeltaInfo",
                    "name": "items",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "adCount",
                    "id": 3
                }
            ]
        },
        {
            "name": "GainBoxReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "type",
                    "id": 1
                }
            ]
        },
        {
            "name": "GainBoxAck",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "TicketInfo",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "type",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "count",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "timeStamp",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "adCount",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "adMaxCount",
                    "id": 5
                }
            ]
        },
        {
            "name": "TicketsInfoNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "TicketInfo",
                    "name": "tickets",
                    "id": 1
                }
            ]
        },
        {
            "name": "DailyBossInfoReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "type",
                    "id": 1
                }
            ]
        },
        {
            "name": "DailyBossInfoAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "type",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "maxLevel",
                    "id": 2
                }
            ]
        },
        {
            "name": "DailyBossEnterReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "index",
                    "id": 1
                }
            ]
        },
        {
            "name": "DailyBossEnterAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "StageNtf",
                    "name": "stage",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "ItemDeltaInfo",
                    "name": "showReward",
                    "id": 2
                }
            ]
        },
        {
            "name": "DailyBossBattleFinishReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "result",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "fastPass",
                    "id": 3
                }
            ]
        },
        {
            "name": "DailyBossBattleFinishAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "maxLevel",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "timeRecord",
                    "id": 3
                }
            ]
        },
        {
            "name": "DailyBossBattleRewardReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "tp",
                    "id": 2
                }
            ]
        },
        {
            "name": "DailyBossBattleRewardAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Id",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "ItemDeltaInfo",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "TicketBuyReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "type",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "buyType",
                    "id": 2
                }
            ]
        },
        {
            "name": "TicketBuyAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "result",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "TicketInfo",
                    "name": "ticket",
                    "id": 2
                }
            ]
        },
        {
            "name": "TicketNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "TicketInfo",
                    "name": "ticket",
                    "id": 1
                }
            ]
        },
        {
            "name": "ResearchTicketADCountNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "count",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "max",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "type",
                    "id": 3
                }
            ]
        },
        {
            "name": "LegendaryBossInfoReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                }
            ]
        },
        {
            "name": "LegendaryBossInfoAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "maxLevel",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "damage",
                    "id": 2
                }
            ]
        },
        {
            "name": "LegendaryBossEnterReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                }
            ]
        },
        {
            "name": "LegendaryBossEnterAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "StageNtf",
                    "name": "stage",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "maxLevel",
                    "id": 2
                }
            ]
        },
        {
            "name": "LegendaryBossBattleFinishReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "level",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "damage",
                    "id": 3
                }
            ]
        },
        {
            "name": "LegendaryBossBattleFinishAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "maxLevel",
                    "id": 1
                }
            ]
        },
        {
            "name": "LegendaryBossBattleRewardReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "tp",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "level",
                    "id": 3
                }
            ]
        },
        {
            "name": "LegendaryBossBattleRewardAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Id",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "ItemDeltaInfo",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "LegendrayBossNextInfoReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                }
            ]
        },
        {
            "name": "LegendrayBossNextInfoAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "StageNtf",
                    "name": "stage",
                    "id": 1
                }
            ]
        },
        {
            "name": "LegendaryBossDamageRankReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                }
            ]
        },
        {
            "name": "LegendaryBossRankInfo",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "guildIcon",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "rank",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "userName",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "damage",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "avatar",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "vipLvl",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "lvl",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "serverId",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "userId",
                    "id": 9
                }
            ]
        },
        {
            "name": "LegendaryBossDamageRankAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "LegendaryBossRankInfo",
                    "name": "infos",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "myRank",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "damage",
                    "id": 3
                }
            ]
        },
        {
            "name": "BoxRewardInfoNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "count",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "times",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "getItemId",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "getValue",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "lastRewardtime",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "flag",
                    "id": 6
                }
            ]
        },
        {
            "name": "BoxRewardRefreshRpt",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "BoxRewardReq",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "BoxRewardAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "ItemDeltaInfo",
                    "name": "iteminfo",
                    "id": 1
                }
            ]
        },
        {
            "name": "ChatRpt",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "chatType",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "message",
                    "id": 2
                }
            ]
        },
        {
            "name": "ChatBriefUserInfo",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "name",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "lvl",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "vip",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "combat",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "avatar",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "serverid",
                    "id": 7
                }
            ]
        },
        {
            "name": "ChatMessageNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "ChatBriefUserInfo",
                    "name": "sender",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "type",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "msg",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ts",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "toId",
                    "id": 5
                }
            ]
        },
        {
            "name": "ChatSendReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "toId",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "type",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "msg",
                    "id": 3
                }
            ]
        },
        {
            "name": "ChatSendAck",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "ChatLoadReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "type",
                    "id": 1
                }
            ]
        },
        {
            "name": "ChatLoadAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "ChatMessageNtf",
                    "name": "msgs",
                    "id": 1
                }
            ]
        },
        {
            "name": "DragonHatchReq",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "DragonHatchAck",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "EggBornRpt",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "DragonBornNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "bornType",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "DragonInfo",
                    "name": "dragons",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "DragonTeam",
                    "name": "teams",
                    "id": 4
                }
            ]
        },
        {
            "name": "DragonNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "DragonInfo",
                    "name": "dragons",
                    "id": 1
                }
            ]
        },
        {
            "name": "EggNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "curNum",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "maxNum",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "curNumToday",
                    "id": 3
                }
            ]
        },
        {
            "name": "EggSpeedReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "aceType",
                    "id": 1
                }
            ]
        },
        {
            "name": "EggSpeedAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "result",
                    "id": 1
                }
            ]
        },
        {
            "name": "AutoPlayReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "state",
                    "id": 1
                }
            ]
        },
        {
            "name": "AutoPlayTimeAddRpt",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "tp",
                    "id": 1
                }
            ]
        },
        {
            "name": "EggSpeedNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "status",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "aceType",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "hatchSpeed",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "fuseSpeed",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "aceStartTime",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "aceEndTime",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "bornSpeed",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "autoStartTime",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "autoEndTime",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "autoState",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "autoType",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "shareTimes",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "autoplayAdCount",
                    "id": 13
                }
            ]
        },
        {
            "name": "DragonFuseReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "dragonId1",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "dragonId2",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "posX",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "posY",
                    "id": 4
                }
            ]
        },
        {
            "name": "DragonFuseAppendReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "dragonId",
                    "id": 1
                }
            ]
        },
        {
            "name": "DragonFuseAppendAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "PropInfo",
                    "name": "reducedInfo",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "DragonInfo",
                    "name": "dragons",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "TeamMemberUpdate",
                    "name": "memberUpdate",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "showHoldDragonId",
                    "id": 4
                }
            ]
        },
        {
            "name": "DragonFuseAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "PropInfo",
                    "name": "reducedInfo",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "DragonInfo",
                    "name": "dragons",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "TeamMemberUpdate",
                    "name": "memberUpdate",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "showHoldDragonId",
                    "id": 4
                },
                {
                    "rule": "repeated",
                    "type": "ItemDeltaInfo",
                    "name": "rewardItems",
                    "id": 5
                }
            ]
        },
        {
            "name": "DragonPos",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "teamType",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "posX",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "posY",
                    "id": 4
                }
            ]
        },
        {
            "name": "DragonPosRpt",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "DragonPos",
                    "name": "pos",
                    "id": 1
                }
            ]
        },
        {
            "name": "GiveupVarRpt",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "tp",
                    "id": 1
                }
            ]
        },
        {
            "name": "TeamSize",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "teamType",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "allowedCount",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "maxCount",
                    "id": 3
                }
            ]
        },
        {
            "name": "TeamSizeNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "TeamSize",
                    "name": "teamSizes",
                    "id": 1
                }
            ]
        },
        {
            "name": "DragonLvlUpReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "index",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "num",
                    "id": 2
                }
            ]
        },
        {
            "name": "DragonUpgradeReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "index",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "star",
                    "id": 2
                }
            ]
        },
        {
            "name": "DragonUpgradeAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "TeamMemberUpdate",
                    "name": "teamMemberUpdates",
                    "id": 1
                }
            ]
        },
        {
            "name": "DragonEnhanceReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "index",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "enhanceId",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "num",
                    "id": 3
                }
            ]
        },
        {
            "name": "DragonEnhanceAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "DragonEnhance",
                    "name": "enhance",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "status",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "ErrorAck",
                    "name": "msg",
                    "id": 3
                }
            ]
        },
        {
            "name": "DragonDetailReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "index",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "isPiece",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "star",
                    "id": 3
                }
            ]
        },
        {
            "name": "DragonDetailAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "DragonEnhance",
                    "name": "enhances",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "DragonEffect",
                    "name": "effects",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "DragonInfo",
                    "name": "baseDragonInfo",
                    "id": 3
                },
                {
                    "rule": "map",
                    "type": "int32",
                    "keytype": "int32",
                    "name": "enhanceMaxLvlList",
                    "id": 4
                }
            ]
        },
        {
            "name": "SetTeamReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "teamType",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "PropInfo",
                    "name": "members",
                    "id": 2
                }
            ]
        },
        {
            "name": "SetTeamAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "DragonTeam",
                    "name": "team",
                    "id": 1
                }
            ]
        },
        {
            "name": "DragonLvlCfgNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "index",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "lvl",
                    "id": 2
                },
                {
                    "rule": "map",
                    "type": "Item",
                    "keytype": "int32",
                    "name": "costCfg",
                    "id": 3
                }
            ]
        },
        {
            "name": "DragonEnhanceCostCfg",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "double",
                    "name": "ratio",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "plus",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "Item",
                    "name": "cost",
                    "id": 3
                }
            ]
        },
        {
            "name": "DragonEnhanceCfgNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "index",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "enhanceId",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "lvl",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "desc",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "unlockStar",
                    "id": 5
                },
                {
                    "rule": "map",
                    "type": "DragonEnhanceCostCfg",
                    "keytype": "int32",
                    "name": "costCfg",
                    "id": 6
                }
            ]
        },
        {
            "name": "DragonConfigReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "index",
                    "id": 1
                }
            ]
        },
        {
            "name": "DragonConfigAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "index",
                    "id": 1
                },
                {
                    "rule": "map",
                    "type": "DragonEnhanceCfgNtf",
                    "keytype": "int32",
                    "name": "enhanceCfg",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "DragonLvlCfgNtf",
                    "name": "lvlCfg",
                    "id": 3
                }
            ]
        },
        {
            "name": "GeneralDragonCfgReq",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "GeneralDragonCfgAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "map",
                    "type": "DragonLvlCfgNtf",
                    "keytype": "int32",
                    "name": "lvlCfg",
                    "id": 1
                }
            ]
        },
        {
            "name": "RecoverDragon",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "index",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "star",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "num",
                    "id": 3
                }
            ]
        },
        {
            "name": "RecoverDragonsReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "RecoverDragon",
                    "name": "rDragon",
                    "id": 1
                }
            ]
        },
        {
            "name": "RecoverDragonsAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "status",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "DragonInfo",
                    "name": "dragons",
                    "id": 2
                }
            ]
        },
        {
            "name": "PreRecoverDragonsReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "RecoverDragon",
                    "name": "rDragon",
                    "id": 1
                }
            ]
        },
        {
            "name": "PreRecoverDragonsAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "Item",
                    "name": "starItems",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "Item",
                    "name": "items",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "price",
                    "id": 3
                }
            ]
        },
        {
            "name": "GeneagentItemInfo",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "researchid",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "showid",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "bfree",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "buystate",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "PropInfo",
                    "name": "cost",
                    "id": 5
                }
            ]
        },
        {
            "name": "EnterGeneagentReq",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "EnterGeneagentAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "GeneagentItemInfo",
                    "name": "infos",
                    "id": 1
                }
            ]
        },
        {
            "name": "GeneagentNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "lastTime",
                    "id": 1
                }
            ]
        },
        {
            "name": "EnterGeneagentBuyOneReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "showid",
                    "id": 1
                }
            ]
        },
        {
            "name": "EnterGeneagentBuyOneAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "result",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "ItemInfo",
                    "name": "info",
                    "id": 2
                }
            ]
        },
        {
            "name": "EnterGeneagentBuyAllReq",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "EnterGeneagentBuyAllAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "result",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "ItemInfo",
                    "name": "infos",
                    "id": 2
                }
            ]
        },
        {
            "name": "EnterGeneagentResearchReq",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "EnterGeneagentResearchAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "GeneagentItemInfo",
                    "name": "infos",
                    "id": 1
                }
            ]
        },
        {
            "name": "BuyGeneagentTicketReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "tp",
                    "id": 1
                }
            ]
        },
        {
            "name": "BuyGeneagentTicketAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "count",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "limit",
                    "id": 2
                }
            ]
        },
        {
            "name": "OpenGeneagenItemInfo",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "num",
                    "id": 2
                }
            ]
        },
        {
            "name": "OpenGeneagentReq",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "OpenGeneagentAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "OpenGeneagenItemInfo",
                    "name": "infos",
                    "id": 1
                }
            ]
        },
        {
            "name": "LeveupGeneagentReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                }
            ]
        },
        {
            "name": "LeveupGeneagentAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "oldid",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "newid",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "newnum",
                    "id": 3
                }
            ]
        },
        {
            "name": "ServerInfo",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "index",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "name",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "area",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "flag",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "addr",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "isNew",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "isClose",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "info",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "serverId",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "OpenTime",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "userlvl",
                    "id": 11
                }
            ]
        },
        {
            "name": "LoginReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "channelId",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "gameKey",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "loginType",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "loginTicket",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "timeStamp",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "nonce",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "signature",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "serverIndex",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "openId",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "appVersion",
                    "id": 10
                }
            ]
        },
        {
            "name": "LoginAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "openId",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "loginKey",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "nickName",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "lastServerId",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "avatar",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "gender",
                    "id": 6
                }
            ]
        },
        {
            "name": "GetServerListReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "isTest",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "appId",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "channelId",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "appVersion",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "openId",
                    "id": 5
                }
            ]
        },
        {
            "name": "GetServerListAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "index",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "ServerInfo",
                    "name": "servers",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "wssaddr",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "lastindex",
                    "id": 4
                }
            ]
        },
        {
            "name": "GetServerAddrReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "serverIdx",
                    "id": 1
                }
            ]
        },
        {
            "name": "GetServerAddrAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "serverIdx",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "addr",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "status",
                    "id": 3
                }
            ]
        },
        {
            "name": "ReportReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "appVersion",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "openId",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ip",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "channelId",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "timeStamp",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "type",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "subtype",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "info",
                    "id": 8
                }
            ]
        },
        {
            "name": "ReportAck",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "EnterGameReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "openId",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "loginKey",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "serverIndex",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "channel",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "clientIp",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "mobileInfo",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "loginToken",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "loginExtra",
                    "id": 8
                }
            ]
        },
        {
            "name": "CreateUserReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "nickName",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "avatar",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "gender",
                    "id": 3
                }
            ]
        },
        {
            "name": "CreateUserAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "UserInfoNtf",
                    "name": "userInfo",
                    "id": 1
                }
            ]
        },
        {
            "name": "FirstEnterRpt",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "GetGameDataRpt",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "GetGameDataNtf",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "EnterGameAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "UserInfoNtf",
                    "name": "userInfo",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "DragonNtf",
                    "name": "dragons",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ts",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "version",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Id",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zoneOpenTime",
                    "id": 15
                }
            ]
        },
        {
            "name": "UserPTProfile",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "nickName",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "avatar",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "gender",
                    "id": 3
                }
            ]
        },
        {
            "name": "UserInfoNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "lvl",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "copyId",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "lastRegressTime",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "NameModifyCount",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "NickName",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "researchDragontime",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "rewardLevel",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "maxStage",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "avatar",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "UserPTProfile",
                    "name": "profile",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "totalVipExp",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "vipLvl",
                    "id": 12
                },
                {
                    "rule": "map",
                    "type": "int32",
                    "keytype": "int32",
                    "name": "maxStages",
                    "id": 13
                }
            ]
        },
        {
            "name": "ItemInfosNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "ItemInfo",
                    "name": "items",
                    "id": 1
                }
            ]
        },
        {
            "name": "ItemsShowUnit",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "tp",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "ItemDeltaInfo",
                    "name": "items",
                    "id": 2
                }
            ]
        },
        {
            "name": "ItemsShowNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "flag",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "sourceItem",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "rmb",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "ItemsShowUnit",
                    "name": "info",
                    "id": 4
                }
            ]
        },
        {
            "name": "TeamNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "combat",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "DragonTeam",
                    "name": "team",
                    "id": 2
                }
            ]
        },
        {
            "name": "BreaksInfoNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "times",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "limit",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "endTime",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "speed",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "stage",
                    "id": 5
                }
            ]
        },
        {
            "name": "GetUserLevelRewardReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "level",
                    "id": 1
                }
            ]
        },
        {
            "name": "GetUserLevelRewardAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "level",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "ItemInfo",
                    "name": "items",
                    "id": 2
                }
            ]
        },
        {
            "name": "UserChangeNameReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "dstName",
                    "id": 1
                }
            ]
        },
        {
            "name": "UserChangeNameAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "UserInfoNtf",
                    "name": "info",
                    "id": 1
                }
            ]
        },
        {
            "name": "KickUserNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "reason",
                    "id": 1
                }
            ]
        },
        {
            "name": "ClientLogRpt",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "loog",
                    "id": 1
                }
            ]
        },
        {
            "name": "UserHitPointRpt",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "hit",
                    "id": 1
                }
            ]
        },
        {
            "name": "ServerTimeNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "nanoTime",
                    "id": 1
                }
            ]
        },
        {
            "name": "UserVarNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "firstFuse",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "dailyFuse",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "firstAutoPlay",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "firstAce",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "firstMaxStageBreak",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "dailyADRegress",
                    "id": 6
                }
            ]
        },
        {
            "name": "GetUserRandomNameReq",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "GetUserRandomNameAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "name",
                    "id": 1
                }
            ]
        },
        {
            "name": "GetCopyStartStageReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "copyId",
                    "id": 1
                }
            ]
        },
        {
            "name": "GetCopyStartStageAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "startStage",
                    "id": 1
                }
            ]
        },
        {
            "name": "mailInfo",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "title",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "status",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "expireAt",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "RedeemedAt",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "itemid",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "itemcount",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Content",
                    "id": 8
                },
                {
                    "rule": "repeated",
                    "type": "Item",
                    "name": "items",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "createAt",
                    "id": 10
                }
            ]
        },
        {
            "name": "MailReadReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "ids",
                    "id": 1,
                    "options": {
                        "packed": true
                    }
                }
            ]
        },
        {
            "name": "MailReadAck",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "MailRedeemReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "ids",
                    "id": 1,
                    "options": {
                        "packed": true
                    }
                }
            ]
        },
        {
            "name": "MailRedeemAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "ItemDeltaInfo",
                    "name": "items",
                    "id": 1
                }
            ]
        },
        {
            "name": "MailLoadReq",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "MailLoadAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "mailInfo",
                    "name": "mailInfos",
                    "id": 1
                }
            ]
        },
        {
            "name": "MailDeleteReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "ids",
                    "id": 1,
                    "options": {
                        "packed": true
                    }
                }
            ]
        },
        {
            "name": "MailDeleteAck",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "MailNewNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "mailInfo",
                    "name": "mails",
                    "id": 1
                }
            ]
        },
        {
            "name": "MonthCardInfo",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "expireAt",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "redeemTo",
                    "id": 2
                }
            ]
        },
        {
            "name": "MonthCardLoadReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "activityId",
                    "id": 1
                }
            ]
        },
        {
            "name": "MonthCardLoadAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "map",
                    "type": "MonthCardInfo",
                    "keytype": "int32",
                    "name": "infos",
                    "id": 2
                }
            ]
        },
        {
            "name": "MonthCardRedeemReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "monthCardType",
                    "id": 1
                }
            ]
        },
        {
            "name": "MonthCardRedeemAck",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "MonthCardChangedNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "monthCardType",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "MonthCardInfo",
                    "name": "info",
                    "id": 2
                }
            ]
        },
        {
            "name": "MonthCardBuyReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "activityId",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "goodsId",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "count",
                    "id": 3
                }
            ]
        },
        {
            "name": "MonthCardBuyAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "data",
                    "id": 1
                }
            ]
        },
        {
            "name": "GameMsgNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "time",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "args",
                    "id": 3
                }
            ]
        },
        {
            "name": "SystemMsgNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "msg",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "time",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "showtimes",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "interval",
                    "id": 4
                }
            ]
        },
        {
            "name": "SystemMsgNotice",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "type",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "msg",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "endtime",
                    "id": 4
                }
            ]
        },
        {
            "name": "SystemMsgNoticeNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "SystemMsgNotice",
                    "name": "notices",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "loginFlag",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "showtimes",
                    "id": 3
                }
            ]
        },
        {
            "name": "NoviceGiftNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "map",
                    "type": "int32",
                    "keytype": "int32",
                    "name": "gotGiftCount",
                    "id": 1
                }
            ]
        },
        {
            "name": "NoviceGiftAwardReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                }
            ]
        },
        {
            "name": "NoviceGiftAwardAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "ItemDeltaInfo",
                    "name": "changeItemInfo",
                    "id": 1
                }
            ]
        },
        {
            "name": "OfflineRewardNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "AtkSpeed",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "AtkTime",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "StartStage",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "EndStage",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "RewardEfficiency",
                    "id": 5
                },
                {
                    "rule": "repeated",
                    "type": "ItemDeltaInfo",
                    "name": "reward",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "LastStageCount",
                    "id": 7
                }
            ]
        },
        {
            "name": "OnlineRewardData",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "flag",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "time",
                    "id": 3
                }
            ]
        },
        {
            "name": "OnlineRewardNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "open",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "OnlineRewardData",
                    "name": "rewardinfo",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "tomorrowdaygroup",
                    "id": 3
                }
            ]
        },
        {
            "name": "GetOnlineRewardReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                }
            ]
        },
        {
            "name": "GetOnlineRewardAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "result",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "ItemDeltaInfo",
                    "name": "iteminfo",
                    "id": 2
                }
            ]
        },
        {
            "name": "OnlineAdNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "itemId",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "itemCount",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "radio",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "timeStamp",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "onlineAdType",
                    "id": 5
                }
            ]
        },
        {
            "name": "GetOnlineAdRewardReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "tp",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "onlineType",
                    "id": 2
                }
            ]
        },
        {
            "name": "GetOnlineAdRewardAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "count",
                    "id": 1
                }
            ]
        },
        {
            "name": "OnlineADRewardNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "count",
                    "id": 1
                }
            ]
        },
        {
            "name": "PreferenceEntry",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "key",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "value",
                    "id": 2
                }
            ]
        },
        {
            "name": "PreferenceSetReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "key",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "value",
                    "id": 2
                }
            ]
        },
        {
            "name": "PreferenceSetAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "PreferenceEntry",
                    "name": "entry",
                    "id": 1
                }
            ]
        },
        {
            "name": "PreferenceLoadReq",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "PreferenceLoadAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "PreferenceEntry",
                    "name": "entries",
                    "id": 1
                }
            ]
        },
        {
            "name": "UserRankInfoReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "copyId",
                    "id": 1
                }
            ]
        },
        {
            "name": "UserRankInfo",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "name",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "level",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "maxStage",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "passTime",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Id",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "avatar",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "vip",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "copyId",
                    "id": 8
                },
                {
                    "rule": "map",
                    "type": "int32",
                    "keytype": "int32",
                    "name": "dragons",
                    "id": 9
                }
            ]
        },
        {
            "name": "UserRankInfoAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "copyId",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "totalRankNum",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "UserRankInfo",
                    "name": "infos",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "myRank",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "maxStage",
                    "id": 5
                }
            ]
        },
        {
            "name": "UserRankGapNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "pregap",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "nextgap",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "currank",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "prerank",
                    "id": 4
                }
            ]
        },
        {
            "name": "DragonCost",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "ids",
                    "id": 2,
                    "options": {
                        "packed": true
                    }
                },
                {
                    "rule": "repeated",
                    "type": "PropInfo",
                    "name": "info",
                    "id": 3
                }
            ]
        },
        {
            "name": "DragonEnhanceCostNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "DragonCost",
                    "name": "costs",
                    "id": 1
                }
            ]
        },
        {
            "name": "ResearchDragon",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "State",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Free",
                    "id": 3
                }
            ]
        },
        {
            "name": "ResearchDragonsReq",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "ResearchDragonsAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "ResearchDragon",
                    "name": "dragons",
                    "id": 1
                }
            ]
        },
        {
            "name": "ResearchBuyDragonReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "byType",
                    "id": 2
                }
            ]
        },
        {
            "name": "ResearchBuyDragonAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "result",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "ResearchDragon",
                    "name": "dragon",
                    "id": 3
                }
            ]
        },
        {
            "name": "ResearchRefreshDragonReq",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "ResearchRefreshDragonAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "ResearchDragon",
                    "name": "dragons",
                    "id": 1
                }
            ]
        },
        {
            "name": "ResearchBuyDragonTicketReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "tp",
                    "id": 1
                }
            ]
        },
        {
            "name": "ResearchBuyDragonTicketAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "count",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "limit",
                    "id": 2
                }
            ]
        },
        {
            "name": "ResearchTimeNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "researchDragontime",
                    "id": 1
                }
            ]
        },
        {
            "name": "ResearchInstitueInfo",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "state",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "level",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fromgain",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "togain",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "PropInfo",
                    "name": "cost",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "PropInfo",
                    "name": "Condition",
                    "id": 7
                }
            ]
        },
        {
            "name": "ResearchInstitueInfoReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "type",
                    "id": 1
                }
            ]
        },
        {
            "name": "ResearchInstitueInfoAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "ResearchInstitueInfo",
                    "name": "infos",
                    "id": 1
                }
            ]
        },
        {
            "name": "UnlockResearchInstitueLevelupReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                }
            ]
        },
        {
            "name": "UnlockResearchInstitueLevelupAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "result",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "ResearchInstitueInfo",
                    "name": "levelinfo",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "ResearchInstitueInfo",
                    "name": "relyinfo",
                    "id": 3
                }
            ]
        },
        {
            "name": "ResearchInstFuncNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "PropInfoF",
                    "name": "effects",
                    "id": 1
                }
            ]
        },
        {
            "name": "SDKAwardEntry",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "key",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "value",
                    "id": 2
                }
            ]
        },
        {
            "name": "SDKAwardRpt",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "type",
                    "id": 1
                }
            ]
        },
        {
            "name": "SDKAwardNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "SDKAwardEntry",
                    "name": "award",
                    "id": 1
                }
            ]
        },
        {
            "name": "SevenDayReq",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "SevenDayAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "first",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "SevenDayList",
                    "name": "sevenDayList",
                    "id": 2
                }
            ]
        },
        {
            "name": "SevenDayList",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "day",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "canReward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SevenDayRewardReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "day",
                    "id": 1
                }
            ]
        },
        {
            "name": "SevenDayRewardAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "ItemDeltaInfo",
                    "name": "changeItemInfo",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "SevenDayList",
                    "name": "sevenDayList",
                    "id": 2
                }
            ]
        },
        {
            "name": "SevenDayNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "first",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "SevenDayList",
                    "name": "sevenDayList",
                    "id": 2
                }
            ]
        },
        {
            "name": "SevenDayNtfs",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "first",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "SevenDayList",
                    "name": "sevenDayList",
                    "id": 2
                }
            ]
        },
        {
            "name": "ShopBoughtInfo",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "allBoughtCount",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "dailyBoughtCount",
                    "id": 3
                }
            ]
        },
        {
            "name": "PurchaseItemReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "count",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "index",
                    "id": 3
                }
            ]
        },
        {
            "name": "PurchaseItemAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "ShopBoughtInfo",
                    "name": "boughtInfo",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "ShopReq",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "ShopAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "map",
                    "type": "ShopBoughtInfo",
                    "keytype": "int32",
                    "name": "boughtLogs",
                    "id": 1
                }
            ]
        },
        {
            "name": "ShopBoughtInfosNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "map",
                    "type": "ShopBoughtInfo",
                    "keytype": "int32",
                    "name": "boughtLogs",
                    "id": 1
                }
            ]
        },
        {
            "name": "ShopBoughtInfoNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "ShopBoughtInfo",
                    "name": "boughtLog",
                    "id": 1
                }
            ]
        },
        {
            "name": "ShopInfo",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "SubName",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "SubName2",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "BodyName",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ItemName",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ShopIcon",
                    "id": 6
                },
                {
                    "rule": "repeated",
                    "type": "PropInfo",
                    "name": "ItemInfo",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "MoneyType",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Price",
                    "id": 9
                },
                {
                    "rule": "repeated",
                    "type": "PropInfo",
                    "name": "FirstGift",
                    "id": 10
                },
                {
                    "rule": "repeated",
                    "type": "PropInfo",
                    "name": "Gift",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ItemText",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Tag",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Days",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "MaxPurchaseTime",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Deal",
                    "id": 16
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Condition",
                    "id": 17
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Openornot",
                    "id": 18
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Sortid",
                    "id": 19
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bodyIcon",
                    "id": 20
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "bgType",
                    "id": 21
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "icon2",
                    "id": 22
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "icon3",
                    "id": 23
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "tips",
                    "id": 24
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "flag",
                    "id": 25
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "normalPrice",
                    "id": 26
                }
            ]
        },
        {
            "name": "ShopConfiReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "version",
                    "id": 1
                }
            ]
        },
        {
            "name": "ShopConfiAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "ShopInfo",
                    "name": "infos",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "version",
                    "id": 2
                }
            ]
        },
        {
            "name": "OpenFirstBuyRpt",
            "syntax": "proto3",
            "fields": []
        },
        {
            "name": "LimitTimeBuyInfo",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "endTime",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "GoodsId",
                    "id": 2
                }
            ]
        },
        {
            "name": "LimitTimeBuyItemNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "LimitTimeBuyInfo",
                    "name": "limitItems",
                    "id": 1
                }
            ]
        },
        {
            "name": "LimitTimeBuyItemReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "index",
                    "id": 1
                }
            ]
        },
        {
            "name": "LimitTimeBuyItemAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "TeamMemberUpdate",
                    "name": "memberUpdate",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "dragonId",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "DragonInfo",
                    "name": "dragons",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "showHoldDragonId",
                    "id": 4
                }
            ]
        },
        {
            "name": "VipGiftRewardNtf",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "lvls",
                    "id": 1,
                    "options": {
                        "packed": true
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "dailyLvls",
                    "id": 2,
                    "options": {
                        "packed": true
                    }
                }
            ]
        },
        {
            "name": "VipGiftRewardReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "lvl",
                    "id": 1
                }
            ]
        },
        {
            "name": "VipGiftRewardAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "ItemDeltaInfo",
                    "name": "changeItemInfo",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "lvls",
                    "id": 2,
                    "options": {
                        "packed": true
                    }
                }
            ]
        },
        {
            "name": "VipGiftDailyRewardReq",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "vipLvl",
                    "id": 1
                }
            ]
        },
        {
            "name": "VipGiftDailyRewardAck",
            "syntax": "proto3",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "ItemDeltaInfo",
                    "name": "changeItemInfo",
                    "id": 1
                }
            ]
        }
    ],
    "isNamespace": true
}).build().pb;

(function() {
    var idMap = {
        "8": "ErrorAck",
        "10": "LoginReq",
        "11": "LoginAck",
        "12": "GetServerListReq",
        "13": "GetServerListAck",
        "14": "GetServerAddrReq",
        "15": "GetServerAddrAck",
        "16": "ReportReq",
        "17": "ReportAck",
        "100": "EnterGameReq",
        "101": "EnterGameAck",
        "102": "CreateUserReq",
        "103": "FirstEnterRpt",
        "104": "GetGameDataRpt",
        "105": "GetGameDataNtf",
        "106": "CreateUserAck",
        "107": "GetUserRandomNameReq",
        "108": "GetUserRandomNameAck",
        "111": "UserInfoNtf",
        "112": "ItemInfosNtf",
        "113": "DragonNtf",
        "114": "DragonBornNtf",
        "115": "ItemsShowNtf",
        "116": "TeamNtf",
        "117": "EggNtf",
        "118": "StageNtf",
        "119": "EggSpeedNtf",
        "120": "MailNewNtf",
        "121": "BreaksInfoNtf",
        "122": "ConditionNtf",
        "123": "TaskInfosNtf",
        "124": "OfflineRewardNtf",
        "125": "SDKAwardNtf",
        "126": "TicketNtf",
        "127": "ResearchTimeNtf",
        "128": "ShopBoughtInfoNtf",
        "129": "SystemMsgNtf",
        "130": "KickUserNtf",
        "131": "TeamSizeNtf",
        "132": "ClientLogRpt",
        "133": "UserHitPointRpt",
        "134": "TicketsInfoNtf",
        "135": "ServerTimeNtf",
        "136": "TaskUpdateNtf",
        "137": "UserRankGapNtf",
        "138": "ResearchTicketADCountNtf",
        "139": "OnlineAdNtf",
        "140": "LivenessNtf",
        "141": "ResearchInstFuncNtf",
        "142": "GeneagentNtf",
        "143": "DragonEnhanceCostNtf",
        "144": "GiftOpenNtf",
        "145": "SystemMsgNoticeNtf",
        "146": "ArenaEnemyNtf",
        "147": "ArenaInfoNtf",
        "148": "AutoPlayTimeAddRpt",
        "149": "UserVarNtf",
        "155": "BoxRewardRefreshRpt",
        "156": "OpenFirstBuyRpt",
        "157": "ShopBoughtInfosNtf",
        "158": "DragonLvlCfgNtf",
        "159": "DragonEnhanceCfgNtf",
        "160": "ArenaNewRankNtf",
        "201": "DragonPosRpt",
        "203": "EggBornRpt",
        "205": "SDKAwardRpt",
        "206": "UserPTProfileRpt",
        "207": "GiveupVarRpt",
        "209": "EggSpeedReq",
        "210": "EggSpeedAck",
        "211": "AutoPlayReq",
        "221": "EnterCopyReq",
        "222": "EnterCopyAck",
        "223": "RegressReq",
        "224": "RegressAck",
        "225": "RegressRewardReq",
        "226": "RegressRewardAck",
        "227": "StageBreakReq",
        "228": "StageBreakAck",
        "229": "StageEndRpt",
        "230": "StageEndNtf",
        "251": "SetTeamReq",
        "252": "SetTeamAck",
        "253": "DragonLvlUpReq",
        "255": "DragonUpgradeReq",
        "256": "DragonUpgradeAck",
        "257": "DragonEnhanceReq",
        "258": "DragonEnhanceAck",
        "259": "DragonDetailReq",
        "260": "DragonDetailAck",
        "261": "DragonHatchReq",
        "263": "ResearchDragonsReq",
        "264": "ResearchDragonsAck",
        "265": "ResearchBuyDragonReq",
        "266": "ResearchBuyDragonAck",
        "267": "ResearchRefreshDragonReq",
        "268": "ResearchRefreshDragonAck",
        "269": "FinishTaskReq",
        "270": "FinishTaskAck",
        "271": "DragonFuseReq",
        "272": "DragonFuseAck",
        "273": "ResearchBuyDragonTicketReq",
        "274": "ResearchBuyDragonTicketAck",
        "275": "HeadPicChangeReq",
        "276": "HeadPicChangeAck",
        "277": "GetOnlineAdRewardReq",
        "278": "GetOnlineAdRewardAck",
        "279": "LivenessAwardReq",
        "280": "LivenessAwardAck",
        "281": "MailRedeemReq",
        "282": "MailRedeemAck",
        "283": "MailLoadReq",
        "284": "MailLoadAck",
        "285": "DragonPiecesCombineReq",
        "286": "DragonPiecesCombineAck",
        "287": "DragonFuseAppendReq",
        "288": "DragonFuseAppendAck",
        "290": "ShopConfiReq",
        "291": "ShopConfiAck",
        "292": "ShopReq",
        "293": "ShopAck",
        "294": "PurchaseItemReq",
        "295": "PurchaseItemAck",
        "296": "UserChangeNameReq",
        "297": "UserChangeNameAck",
        "298": "UserRankInfoReq",
        "299": "UserRankInfoAck",
        "302": "GetUserLevelRewardReq",
        "303": "GetUserLevelRewardAck",
        "304": "SevenDayReq",
        "305": "SevenDayAck",
        "306": "SevenDayRewardReq",
        "307": "SevenDayRewardAck",
        "308": "SevenDayNtf",
        "309": "BoxRewardInfoNtf",
        "310": "BoxRewardReq",
        "311": "BoxRewardAck",
        "314": "DailyBossInfoReq",
        "315": "DailyBossInfoAck",
        "316": "DailyBossEnterReq",
        "317": "DailyBossEnterAck",
        "318": "DailyBossBattleFinishReq",
        "319": "DailyBossBattleFinishAck",
        "320": "TicketBuyReq",
        "321": "TicketBuyAck",
        "322": "DailyBossBattleRewardReq",
        "323": "DailyBossBattleRewardAck",
        "324": "GetOnlineRewardReq",
        "325": "GetOnlineRewardAck",
        "326": "OnlineRewardNtf",
        "340": "PreferenceSetReq",
        "341": "PreferenceSetAck",
        "342": "PreferenceLoadReq",
        "343": "PreferenceLoadAck",
        "344": "ResearchInstitueInfoReq",
        "345": "ResearchInstitueInfoAck",
        "346": "UnlockResearchInstitueLevelupReq",
        "347": "UnlockResearchInstitueLevelupAck",
        "348": "EnterGeneagentReq",
        "349": "EnterGeneagentAck",
        "351": "EnterGeneagentBuyOneReq",
        "352": "EnterGeneagentBuyOneAck",
        "353": "EnterGeneagentBuyAllReq",
        "354": "EnterGeneagentBuyAllAck",
        "355": "EnterGeneagentResearchReq",
        "356": "EnterGeneagentResearchAck",
        "357": "OpenGeneagentReq",
        "358": "OpenGeneagentAck",
        "359": "LeveupGeneagentReq",
        "360": "LeveupGeneagentAck",
        "361": "BuyGeneagentTicketReq",
        "362": "BuyGeneagentTicketAck",
        "363": "ArenaLoadReq",
        "364": "ArenaLoadAck",
        "365": "ArenaBeginReq",
        "366": "ArenaBeginAck",
        "367": "ArenaEndReq",
        "368": "ArenaEndAck",
        "369": "ArenaLoadRecordReq",
        "370": "ArenaLoadRecordAck",
        "371": "ArenaRankAwardReq",
        "372": "ArenaRankAwardAck",
        "373": "ArenaChallengeAwardReq",
        "374": "ArenaChallengeAwardAck",
        "375": "ArenaGetUserReq",
        "376": "ArenaGetUserAck",
        "377": "ArenaGetRankReq",
        "378": "ArenaGetRankAck",
        "379": "ArenaGetFormatReq",
        "380": "ArenaGetFormatAck",
        "381": "RegressResetReq",
        "382": "RegressResetAck",
        "383": "ArenaCheckReq",
        "384": "ArenaCheckAck",
        "400": "ActivityLoadReq",
        "401": "ActivityLoadAck",
        "410": "ActivityLuckyTurntableLoadReq",
        "411": "ActivityLuckyTurntableLoadAck",
        "412": "ActivityLuckyTurntableDoReq",
        "413": "ActivityLuckyTurntableDoAck",
        "414": "ActivityLuckyTurntableRecordNtf",
        "415": "MonthCardLoadReq",
        "416": "MonthCardLoadAck",
        "417": "MonthCardRedeemReq",
        "418": "MonthCardRedeemAck",
        "419": "MonthCardChangedNtf",
        "420": "MonthCardBuyReq",
        "421": "MonthCardBuyAck",
        "422": "ActLuckyTurntableExtraAwardReq",
        "423": "ActLuckyTurntableExtraAwardAck",
        "500": "GetCopyStartStageReq",
        "501": "GetCopyStartStageAck",
        "502": "GeneralDragonCfgReq",
        "503": "GeneralDragonCfgAck",
        "504": "DragonConfigReq",
        "505": "DragonConfigAck",
        "506": "PreRecoverDragonsReq",
        "507": "PreRecoverDragonsAck",
        "508": "RecoverDragonsReq",
        "509": "RecoverDragonsAck",
        "510": "AdExtraAwardReq",
        "511": "AdExtraAwardAck",
        "515": "NoviceGiftNtf",
        "516": "NoviceGiftAwardReq",
        "517": "NoviceGiftAwardAck",
        "520": "VipGiftRewardNtf",
        "521": "VipGiftRewardReq",
        "522": "VipGiftRewardAck",
        "523": "MailReadReq",
        "524": "MailReadAck",
        "525": "MailDeleteReq",
        "526": "MailDeleteAck",
        "530": "ActivityHeroComposeReq",
        "531": "ActivityHeroComposeAck",
        "532": "SevenDayNtfs",
        "533": "ActivityHeroComposeLoadReq",
        "534": "ActivityHeroComposeLoadAck",
        "540": "OnlineADRewardNtf",
        "550": "LimitTimeBuyItemNtf",
        "551": "LimitTimeBuyItemReq",
        "552": "LimitTimeBuyItemAck",
        "560": "VipGiftDailyRewardReq",
        "561": "VipGiftDailyRewardAck",
        "562": "RefreshTicketRpt",
        "563": "GainBoxReq",
        "564": "GainBoxAck",
        "565": "StageAwardBoxNtf",
        "600": "ChatSendReq",
        "601": "ChatSendAck",
        "602": "ChatLoadReq",
        "603": "ChatLoadAck",
        "604": "ChatMessageNtf",
        "620": "LegendaryBossInfoReq",
        "621": "LegendaryBossInfoAck",
        "622": "LegendaryBossEnterReq",
        "623": "LegendaryBossEnterAck",
        "624": "LegendaryBossBattleFinishReq",
        "625": "LegendaryBossBattleFinishAck",
        "626": "LegendaryBossBattleRewardReq",
        "627": "LegendaryBossBattleRewardAck",
        "628": "LegendrayBossNextInfoReq",
        "629": "LegendrayBossNextInfoAck",
        "630": "AdjutantLvlUpReq",
        "631": "AdjutantLvlUpAck",
        "632": "SetAdjutantReq",
        "633": "SetAdjutantAck",
        "634": "UnlockAdjutantReq",
        "635": "UnlockAdjutantAck",
        "636": "AdjutantsNtf",
        "650": "LegendaryBossDamageRankReq",
        "651": "LegendaryBossDamageRankAck",
        "1000": "ChatRpt",
        "7999": "ComposeDataAck",
    };
    pb.idMap = idMap;
    pb.nameMap = {};
    for (var key in idMap) {
        pb.nameMap[idMap[key]] = +key;
    }
})();
var api = {
}
window.pb = pb;
window.api = api;
