    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)

    const PlAYER_STORAGE_KEY = "F8_PLAYER";

    const player = $('.player')
    const cd = $('.cd')
    const heading = $('header h2')
    const cdThumb = $('.cd-thumb')
    const audio = $('#audio')
    const playBtn = $('.btn-toggle-play')
    const progress = $('#progress')
    const prevBtn = $('.btn-prev')
    const nextBtn = $('.btn-next')
    const randomBtn = $('.btn-random')
    const repeatBtn = $('.btn-repeat')
    const playlist = $('.playlist')

    const app = {
      currentIndex: 0,
      isPlaying: false,
      isRandom: false,
      isRepeat: false,
      songs: [
        {
          name: 'Mashup Crush - speed up',
          singer: '##',
          path: './music/mashup-crush.mp3',
          image: './music/mashup-crush.jpg',
        },
        {
          name: 'Cherry Love - speed up',
          singer: 'Híu',
          path: './music/cherry-love.mp3',
          image: './music/cherry-love.jpg',
        },
        {
          name: 'Em là - speed up',
          singer: 'Mono',
          path: './music/em-la.mp3',
          image: './music/em-la.jpg',
        },
        {
          name: '4 mùa thương em - speed up',
          singer: 'LẬP NGUYÊN ft. NIGHT T x YẾN NỒI CƠM ĐIỆN',
          path: './music/4-mua-thuong-em.mp3',
          image: './music/4-mua-thuong-em.jpg',
        },
        // {
        //   name: '2AM - speed up',
        //   singer: 'JustaTee x BigDaddy x Enderlazer',
        //   path: './music/2am.mp3',
        //   image: './music/2am.jpg',
        // },
        {
          name: 'Anh đâu có hay - speed up',
          singer: 'LEMESE X AUGUST',
          path: './music/anh-dau-co-hay.mp3',
          image: './music/anh-dau-co-hay.png',
        },
        {
          name: 'Thêm bao nhiêu lâu - speed up',
          singer: 'ĐạtG',
          path: './music/them-bao-nhieu-lau.mp3',
          image: './music/them-bao-nhieu-lau.jpg',
        },
        {
          name: 'Muốn được cùng em - speed up',
          singer: 'Freaky x CM1X ft. Quỳnh Gai',
          path: './music/muon-duoc-cung-em.mp3',
          image: './music/muon-duoc-cung-em.jpg',
        },
        {
          name: 'Lying to myself - speed up',
          singer: 'Dab ft. sy',
          path: './music/lying-to-myself.mp3',
          image: './music/lying-to-myself.jpg',
        },
        {
          name: 'In the dark - speed up',
          singer: 'TIA x fueled by boba',
          path: './music/in-the-dark.mp3',
          image: './music/in-the-dark.jpg',
        },
        {
          name: 'Anh đã quen với cô đơn - speed up',
          singer: 'Soobin Hoàng Sơn',
          path: './music/anh-da-quen-voi-co-don.mp3',
          image: './music/anh-da-quen-voi-co-don.jpg',
        },
        {
          name: 'Sao mình chưa nắm tay nhau - Nightcore',
          singer: 'Yan Nguyễn x Haky',
          path: './music/sao-minh-chua-nam-tay-nhau.mp3',
          image: './music/sao-minh-chua-nam-tay-nhau.jpg',
        },
        {
          name: 'Tuyệt sắc - speed up',
          singer: 'NamDuc',
          path: './music/tuyet-sac.mp3',
          image: './music/tuyet-sac.jpg',
        },
        {
          name: 'Giọt sương nắng - speed up',
          singer: 'NamDuc ft.HuuKhanh',
          path: './music/giot-suong-nang.mp3',
          image: './music/giot-suong-nang.jpg',
        },
        {
          name: 'Sao cũng được - speed up',
          singer: 'THÀNH ĐẠT x ĐÔNG THIÊN ĐỨC',
          path: './music/sao-cung-duoc.mp3',
          image: './music/sao-cung-duoc.jpg',
        },
        {
          name: 'Chỉ cần em muốn - speed up',
          singer: 'NP.2 x Hngle',
          path: './music/chi-can-em-muon.mp3',
          image: './music/chi-can-em-muon.jpg',
        },
        {
          name: 'Giấc mơ rất thơ - speed up',
          singer: 'mer ft. thaison!',
          path: './music/giac-mo-rat-tho.mp3',
          image: './music/giac-mo-rat-tho.jpg',
        },
        {
          name: 'Say đắm trong lần đầu - speed up',
          singer: 'JBEE7 x WINNO x NAMB',
          path: './music/say-dam-trong-lan-dau.mp3',
          image: './music/say-dam-trong-lan-dau.jpg',
        },
       {
          name: 'Lạc vào trong mơ - speed up',
          singer: 'simon c x wuy',
          path: './music/lac-vao-trong-mo.mp3',
          image: './music/lac-vao-trong-mo.jpg',
        },
        {
          name: 'Hông về tình yêu - speed up',
          singer: 'Khoi Vu',
          path: './music/hong-ve-tinh-yeu.mp3',
          image: './music/hong-ve-tinh-yeu.jpg',
        },
        {
          name: 'Hướng dương - speed up',
          singer: 'Changg',
          path: './music/huong-duong.mp3',
          image: './music/huong-duong.jpg',
        },
        {
          name: 'Kiếp má hồng - speed up',
          singer: 'TLong',
          path: './music/kiep-ma-hong.mp3',
          image: './music/kiep-ma-hong.jpg',
        },
        {
          name: 'Chắc em đã quên rồi - remix + speed up',
          singer: 'Quang Chợ Lầm',
          path: './music/chac-em-da-quen-roi.mp3',
          image: './music/chac-em-da-quen-roi.jpg',
        },
        {
          name: 'Ánh sao và bầu trời - speed up',
          singer: '##',
          path: './music/anh-sao-va-bau-troi.mp3',
          image: './music/anh-sao-va-bau-troi.jpg',
        },
        {
          name: 'Tình ca tình ca - speed up',
          singer: 'Kis',
          path: './music/tinh-ca-tinh-ca.mp3',
          image: './music/tinh-ca-tinh-ca.jpg',
        },
        {
          name: 'Buồn không thể buông - speed up',
          singer: '##',
          path: './music/buon-khong-the-buong.mp3',
          image: './music/buon-khong-the-buong.jpg',
        },
        {
          name: 'Thiên thần tình yêu - speed up',
          singer: 'Ricky Star',
          path: './music/thien-than-tinh-yeu.mp3',
          image: './music/thien-than-tinh-yeu.jpg',
        },
        {
          name: 'Shay nắng - speed up',
          singer: 'Amee x Obito',
          path: './music/shay-nang.mp3',
          image: './music/shay-nang.jpg',
        },
        {
          name: 'Dont côi - speed up',
          singer: 'RPT Orijinn x Ronboogz',
          path: './music/dont-coi.mp3',
          image: './music/dont-coi.jpg',
        },
        {
          name: '99999 đóa hồng - speed up',
          singer: '##',
          path: './music/99999-doa-hong.mp3',
          image: './music/99999-doa-hong.jpg',
        },
        {
          name: 'Đại diện cho trái tim - speed up',
          singer: 'Southalid',
          path: './music/dai-dien-cho-trai-tim.mp3',
          image: './music/dai-dien-cho-trai-tim.jpg',
        },
        {
          name: 'Tình yêu của anh - speed up',
          singer: 'Nguyễn Phú Quí',
          path: './music/tinh-yeu-cua-anh.mp3',
          image: './music/tinh-yeu-cua-anh.jpg',
        },
      ],
      
      render: function() {
        const htmls = this.songs.map((song, index) => {
          return `
            <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
              <div class="thumb" style="background-image: url('${song.image}')"></div>
              <div class="body">
                <h3 class="title">${song.name}</h3>
                <p class="author">${song.singer}</p>
              </div>
              <div class="option">
                <i class="fas fa-ellipsis-h"></i>
              </div>
            </div>
          `
        })
        playlist.innerHTML = htmls.join('')
      },

      defineProperty: function() {
        Object.defineProperty(this, 'currentSong', {
          get: function() {
            return this.songs[this.currentIndex]
          }
        })
      },

      handleEvents: function() {
        const _this = this
        const cdWidth = cd.offsetWidth

        // Xử lý CD quay / dừng
        const cdThumbAnimate = cdThumb.animate([
          {transform: 'rotate(360deg)'}
        ], {
          duration: 10000, // 10 seconds
          iterations: Infinity,
        })
        cdThumbAnimate.pause()

        // Xử lý phóng to thu nhỏ CD
        document.onscroll = function() {
          const scrollTop = window.scrollY || document.documentElement.scrollTop
          const newCdWidth = cdWidth - scrollTop

          cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
          cd.style.opacity = newCdWidth / cdWidth
        }

        // Xử lý khi click play
        playBtn.onclick = function() {
          if (_this.isPlaying) {
            audio.pause()
          } else {
            audio.play()
          }
        }

        // Khi audio được chạy
        audio.onplay = function() {
          _this.isPlaying = true
          player.classList.add('playing')
          cdThumbAnimate.play()
        }
        // Khi audio dừng
        audio.onpause = function() {
          _this.isPlaying = false
          player.classList.remove('playing')
          cdThumbAnimate.pause()
        }

        // Xử lý thanh timeline đi theo tiến độ bài hát thay đổi
        audio.ontimeupdate = function() {
          if (audio.duration) {
            const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
            progress.value = progressPercent
          }  
        }
        
        // Xử lý tua bài hát
        progress.onchange = function(e) {
          const seekTime = audio.duration / 100 * e.target.value
          audio.currentTime = seekTime
        }

        // Khi next song
        nextBtn.onclick = function() {
          if (_this.isRandom) {
            _this.playRandomSong()
          } else {
            _this.nextSong()
          }
          audio.play()
          _this.render()
          _this.scrollToActiveSong()
        }
        // Khi prev song
        prevBtn.onclick = function() {
          if (_this.isRandom) {
            _this.playRandomSong()
          } else {
            _this.prevSong()
          }
          audio.play()
          _this.render()
        }

        // Xử lý bật / tắt Random song
        randomBtn.onclick = function(e) {
          _this.isRandom = !_this.isRandom
          // _this.setconfig('isRandom', _this.isRandom)
          randomBtn.classList.toggle('active', _this.isRandom)
        }

        // Xử lý phát lại 1 bài hát
        repeatBtn.onclick = function() {
          _this.isRepeat = !_this.isRepeat
          // _this.setconfig('isRepeat', _this.isRepeat)
          repeatBtn.classList.toggle('active', _this.isRepeat)
        }
        
        //  Xử lý next song khi audio ended
        audio.onended = function() {
          if (_this.isRepeat) {
            audio.play()
          } else {
            nextBtn.click()
          }
        }

        // Lắng nghe hành vi click vào playlist
        playlist.onclick = function(e) {
          const songNode = e.target.closest('.song:not(.active)')
          if (songNode || !e.target.closest('option')) {
            // Xử lý khi click vào bài hát
            if (songNode) {
              _this.currentIndex = Number(songNode.dataset.index)
              _this.loadCurrentSong()
              audio.play()
              _this.render()
            }

          }
        }
      },
      scrollToActiveSong: function() {
        setTimeout(() => {
          $('.song.active').scrollIntoView({
            behavior:'smooth',
            block: 'nearest',
          })
        }, 100)
      },

      loadCurrentSong: function() {
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
      },
      // loadConfig: function() {
      //   this.isRandom = this.config.isRandom
      //   this.isRepeat = this.config.isRepeat
      // },
      nextSong: function() {
        this.currentIndex++
        if (this.currentIndex >= this.songs.length) {
          this.currentIndex = 0
        }
        this.loadCurrentSong()
      },
      prevSong: function() {
        this.currentIndex--
        if (this.currentIndex < 0) {
          this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
      },
      playRandomSong: function() {
        let newIndex
        do {
          newIndex = Math.floor(Math.random() * this.songs.length)
        } while (newIndex === this.currentIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong()
      },
      start: function() {
        // Gián cấu hình từ config vào ứng dụng
        // this.loadConfig()
        // Định nghĩa các thuộc tính cho object
        this.defineProperty()

        // Lắng nghe / xử lý các sự kiện (DOM event)
        this.handleEvents()

        // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong()

        // Render playlist
        this.render()

        // Hiển thị trạng thái ban đầu của button repeat & random
        repeatBtn.classList.toggle('active', this.isRepeat)
        randomBtn.classList.toggle('active', this.isRandom)
      }
    }
      app.start()
