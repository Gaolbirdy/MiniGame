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
		this.resultAudio.src= 'audio/result.mp3';

		this.numsSound = [
			'audio/1.wav',
			'audio/2.wav',
			'audio/3.wav',
			'audio/4.wav',
			'audio/5.wav',
			'audio/6.wav',
			'audio/7.wav'
		];
    }

    playStart(timeGoal) {

		this.startAudio.stop();
        this.startAudio.src = this.numsSound[timeGoal - 1];
		this.startAudio.play();
	}

    playTouch() {
        this.resultAudio.stop();
		this.resultAudio.play();
	}
}