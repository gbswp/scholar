namespace app {
    export class Pool {
        static BulletUnitData = "BulletUnitData";
        static Vector = "Vector";
        static Point = "Laya.Point";
        static TrackScript = "TrackScript";
        static VerticeScript = "VerticeScript";
        static VectorScript = "VectorScript";
        static BezierScript = "BezierScript";
        static NoticeItem = "model.NoticeItem";
        static RoleSpineActor = "RoleSpineActor";
        static RoleMCActor = "RoleMCActor";
        static RoleImageActor = "RoleImageActor";
        static MonsterSpineActor = "MonsterSpineActor";
        static MonsterMovieClipActor = "MonsterMovieClipActor";
        static MonsterImageActor = "MonsterImageActor";
        static BulleImageActor = "BulleImageActor";
        static BulleMovieClipUnit = "BulleMovieClipUnit";
        static BulletLaser = "BulletLaser";
        static BulletTrack = "BulletTrack";
        static BulletSplit = "BulletSplit";
        static SummonedMoveUnit = "SummonedMoveUnit";
        static LabelTip = "LabelTip";
        static FlyEffectItem = "FlyEffectItem";
        static SummonedUnitData = "SummonedUnitData";
        static DragonTipView = "DragonTipView";
        static MovieClip = "MovieClip";
        static MonsterUnitData = "MonsterUnitData";
        static HttpRequest = "HttpRequest";
        static Frame = "Frame";
        static PendingReqItem = "PendingReqItem";
        static AddRoleCmd = "AddRoleCmd";
        static RemoveRoleCmd = "RemoveRoleCmd";
        static AddMonsterCmd = "AddMonsterCmd";
        static RemoveMonsterCmd = "RemoveMonsterCmd";
        static RemoveSummonedCmd = "RemoveSummonedCmd";
        static RefreshMonsterCmd = "RefreshMonsterCmd";
        static CreateSkillCmd = "CreateSkillCmd";
        static Rect = "Rect";
        static Circle = "Circle";
        static Polygon = "Polygon";
        static QuadTree = "QuadTree";
        static SceneLayer = "SceneLayer";
        static SoundItem = "SoundItem";
        static SoundMusicItem = "SoundMusicItem";
        static SoundSDKItem = "SoundSDKItem";
        static InsertParam = "InsertParam";
        static ResItem = "ResItem";

        static SkillBone = "SkillBone";
        static SkillScale = "SkillScale";


        static SkillQishe = "SkillQishe";
        static SkillSanshe = "SkillSanshe";
        static SkillLockTarget = "SkillLockTarget";
        static SkillRandomTrack = "SkillRandomTrack";
        static SkillLaser = "SkillLaser";
        static SkillStraightTrack = "SkillStraightTrack";
        static SkillArc = "SkillArc";
        static SkillStar = "SkillStar";
        static SkillWaterPour = "SkillWaterPour";
        static SkillSplit = "SkillSplit";
        static SkillSummoned = "SkillSummoned";
        static SkillRandomQishe = "SkillRandomQishe";
        static SkillVector = "SkillVector";
        static SkillDailyboss = "SkillDailyboss";
        static SkillArcTrack = "SkillArcTrack";
        static SkillIcePicr = "SkillIcePicr";
        static SkillRandomLaser = "SkillRandomLaser";
        static SkillStraightSplit = "SkillStraightSplit";
        static SkillLightning = "SkillLightning";
        static SkillLeaf = "SkillLeaf";


        static get<T>(sign: string, cls: { new (): T }) {
            return Laya.Pool.getItemByClass(sign, cls) as T
        }

        /**
         * 有继承关系的 池回收会有问题  要格外注意
         * @static
         * @param {string} sign
         * @param {*} item
         * @memberof Pool
         */
        static put(sign: string, item: any) {
            if (!item) return;
            let inPoolSign = Laya.Pool["InPoolSign"];
            if (!item[inPoolSign])
                item["reset"] && item["reset"]();
            Laya.Pool.recover(sign, item)
        }
    }

}
