let instance;

export default class Sound {
    constructor() {
        if (instance)
        {
            return instance;
        }

        instance = this;

        this.startAudio = wx.createInnerAudioContext();
		this.startAudio.src = 'audio/1.wav';

		this.resultAudio = wx.createInnerAudioContext();
		this.resultAudio.src = 'audio/result.mp3';

		this.bgmAudio = wx.createInnerAudioContext();
		this.bgmAudio.loop = true;
		this.bgmAudio.src = 'audio/bgm.mp3';

		this.numsSound = [
			'audio/1.wav',
			'audio/2.wav',
			'audio/3.wav',
			'audio/4.wav',
			'audio/5.wav',
			'audio/6.wav',
			'audio/7.wav',
			'audio/8.wav',
			'audio/9.wav'
		];
    }

    playStart(timeGoal) {
		this.startAudio.stop();
        this.startAudio.src = this.numsSound[timeGoal - 1];
		this.startAudio.play();
	}

    playResult() {
        this.resultAudio.stop();
		this.resultAudio.play();
	}

	playBgm() {
		this.bgmAudio.play();
	  }
}