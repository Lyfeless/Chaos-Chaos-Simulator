//Final animation lists for all main objects
var jevilAnims;
var krisAnims;

var initAnims = function()
{
    //jevil
    var jevilDanceFrames = [
        {Img: images.jevil_jump1, Tick: 2},
        {Img: images.jevil_jump2, Tick: 2},
        {Img: images.jevil_jump3, Tick: 2},
        {Img: images.jevil_jump4, Tick: 2},
        {Img: images.jevil_jump5, Tick: 2},
        {Img: images.jevil_jump6, Tick: 2},
        {Img: images.jevil_jump7, Tick: 2},
        {Img: images.jevil_jump8, Tick: 2}
    ];

    var jevilMainFrames = [
        {Img: images.jevil_main, Tick: 1}
    ];

    var jevilLaughFrames = [
        {Img: images.jevil_main_laugh, Tick: 1}
    ];

    var jevilTiredFrames = [
        {Img: images.jevil_main_tired, Tick: 1}
    ];

    var jevilDamageFrames = [
        {Img: images.jevil_damage_body, Tick: 1}
    ];

    var jevilTeleportFrames = [
        {Img: images.jevil_tele_left1, Tick: 3},
        {Img: images.jevil_tele_left2, Tick: 3}
    ];

    var jevilTeleportReverseFrames = [
        {Img: images.jevil_tele_right1, Tick: 3},
        {Img: images.jevil_tele_right2, Tick: 3}
    ];

    //kris
    var krisActFrames = [
        {Img: images.kris_act1, Tick: 3},
        {Img: images.kris_act2, Tick: 3},
        {Img: images.kris_act3, Tick: 3},
        {Img: images.kris_act4, Tick: 3},
        {Img: images.kris_act5, Tick: 3},
        {Img: images.kris_act6, Tick: 3},
        {Img: images.kris_act7, Tick: 3},
        {Img: images.kris_act8, Tick: 3},
        {Img: images.kris_act9, Tick: 3},
        {Img: images.kris_act10, Tick: 3},
        {Img: images.kris_act11, Tick: 3}
    ];

    var krisActReadyFrames = [
        {Img: images.kris_actready1, Tick: 3},
        {Img: images.kris_actready2, Tick: 3}
    ];

    var krisAttackFrames = [
        {Img: images.kris_attack1, Tick: 3},
        {Img: images.kris_attack2, Tick: 3},
        {Img: images.kris_attack3, Tick: 3},
        {Img: images.kris_attack4, Tick: 3},
        {Img: images.kris_attack5, Tick: 3},
        {Img: images.kris_attack6, Tick: 3},
        {Img: images.kris_attack7, Tick: 3}
    ];

    var krisDefendFrames = [
        {Img: images.kris_defend1, Tick: 3},
        {Img: images.kris_defend2, Tick: 3},
        {Img: images.kris_defend3, Tick: 3},
        {Img: images.kris_defend4, Tick: 3},
        {Img: images.kris_defend5, Tick: 3},
        {Img: images.kris_defend6, Tick: 3}
    ];

    var krisIdleFrames = [
        {Img: images.kris_idle1, Tick: 3},
        {Img: images.kris_idle2, Tick: 3},
        {Img: images.kris_idle3, Tick: 3},
        {Img: images.kris_idle4, Tick: 3},
        {Img: images.kris_idle5, Tick: 3},
        {Img: images.kris_idle6, Tick: 3}
    ];

    var krisIntroFrames = [
        {Img: images.kris_intro1, Tick: 3},
        {Img: images.kris_intro2, Tick: 3},
        {Img: images.kris_intro3, Tick: 3},
        {Img: images.kris_intro4, Tick: 3},
        {Img: images.kris_intro5, Tick: 3},
        {Img: images.kris_intro6, Tick: 3},
        {Img: images.kris_intro7, Tick: 3},
        {Img: images.kris_intro8, Tick: 3},
        {Img: images.kris_intro9, Tick: 3},
        {Img: images.kris_intro10, Tick: 3},
        {Img: images.kris_intro11, Tick: 3},
        {Img: images.kris_intro12, Tick: 3},
    ];

    var krisItemFrames = [
        {Img: images.kris_item1, Tick: 3},
        {Img: images.kris_item2, Tick: 3},
        {Img: images.kris_item3, Tick: 3},
        {Img: images.kris_item4, Tick: 3},
        {Img: images.kris_item5, Tick: 3},
        {Img: images.kris_item6, Tick: 3},
        {Img: images.kris_item7, Tick: 3}
    ];

    var krisPirouetteFrames = [
        {Img: images.kris_pirouette1, Tick: 3},
        {Img: images.kris_pirouette2, Tick: 3},
        {Img: images.kris_pirouette3, Tick: 3},
        {Img: images.kris_pirouette4, Tick: 3},
        {Img: images.kris_pirouette5, Tick: 3},
        {Img: images.kris_pirouette6, Tick: 3}
    ];

    var krisAttackReadyFrames = [
        {Img: images.kris_attackready, Tick: 1}
    ];

    var krisDefeatFrames = [
        {Img: images.kris_defeat, Tick: 1}
    ];

    var krisHurtFrames = [
        {Img: images.kris_hurt, Tick: 1}
    ];

    var krisItemReadyFrames = [
        {Img: images.kris_itemready, Tick: 1}
    ];

    //setup final anim list
    jevilAnims = [
        {Name: "Dance", Frames: jevilDanceFrames, Type: loopTypes.LOOP, Exit: null},
        {Name: "Main", Frames: jevilMainFrames, Type: loopTypes.STILL, Exit: null},
        {Name: "Main_Laugh", Frames: jevilLaughFrames, Type: loopTypes.STILL, Exit: null},
        {Name: "Main_Tired", Frames: jevilTiredFrames, Type: loopTypes.STILL, Exit: null},
        {Name: "Teleport", Frames: jevilTeleportFrames, Type: loopTypes.SINGLE, Exit: null},
        {Name: "Teleport_Reverse", Frames: jevilTeleportReverseFrames, Type: loopTypes.SINGLE, Exit: null},
        {Name: "Damage_Body", Frames: jevilDamageFrames, Type: loopTypes.STILL, Exit: null},
    ];

    krisAnims = 
    [
        {Name: "Act", Frames: krisActFrames, Type: loopTypes.SINGLE, Exit: null},
        {Name: "Act_Ready", Frames: krisActReadyFrames, Type: loopTypes.SINGLE, Exit: null},
        {Name: "Attack", Frames: krisAttackFrames, Type: loopTypes.SINGLE, Exit: null},
        {Name: "Defend", Frames: krisDefendFrames, Type: loopTypes.SINGLE, Exit: null},
        {Name: "Idle", Frames: krisIdleFrames, Type: loopTypes.LOOP, Exit: null},
        {Name: "Intro", Frames: krisIntroFrames, Type: loopTypes.SINGLE, Exit: "Idle"},
        {Name: "Item", Frames: krisItemFrames, Type: loopTypes.SINGLE, Exit: null},
        {Name: "Pirouette", Frames: krisPirouetteFrames, Type: loopTypes.SINGLE, Exit: null},
        {Name: "Attack_Ready", Frames: krisAttackReadyFrames, Type: loopTypes.STILL, Exit: null},
        {Name: "Defeat", Frames: krisDefeatFrames, Type: loopTypes.STILL, Exit: null},
        {Name: "Hurt", Frames: krisHurtFrames, Type: loopTypes.STILL, Exit: null},
        {Name: "Item_Ready", Frames: krisItemReadyFrames, Type: loopTypes.STILL, Exit: null}
    ]
}

var setSingleSpriteImg = function(img)
{
    var anim = [{Name: "sprite", Frames: [{Img: img, Tick: 1}], Type: loopTypes.SINGLE, Exit: null}];
    return anim;
}