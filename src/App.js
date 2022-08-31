import React, { Component } from 'react';
import { Slider, Slide, Caption, Row, Col, Card, CardTitle, SideNav, Button, SideNavItem, Icon, Pagination } from 'react-materialize';

class App extends Component {
  render() {
    return (
      <div><SideNav
        option={{ draggable: true }}
        trigger={<Button node='button'><Icon>list</Icon></Button>}>
        <SideNavItem
          user={{
            background: 'https://materializecss.com/images/office.jpg',
            email: 'test@gmail.com',
            image: 'https://materializecss.com/images/yuna.jpg',
            name: 'Satria Darmawan'
          }}
          userView />
        <SideNavItem
          href='#!profilsaya'
          icon={<Icon>person_outline</Icon>}>
          Profil Saya
        </SideNavItem>
        <SideNavItem
          href='#!hubungikami'
          icon={<Icon>help</Icon>}>
          Hubungi Kami
        </SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>
          Product
        </SideNavItem>
        <SideNavItem
          href='#!kesehatan' waves>
          Kesehatan
        </SideNavItem>
        <SideNavItem
          href='#!komputer' waves>
          Komputer & Aksesoris
        </SideNavItem>
        <SideNavItem
          href='#!gaming' waves>
          Gaming
        </SideNavItem>
        <SideNavItem
          href='#!kamera' waves>
          Kamera
        </SideNavItem>
        <SideNavItem
          href='#!olahraga' waves>
          Olahraga
        </SideNavItem>
        <SideNavItem
          href='#!fashionpria' waves>
          Fashion Pria
        </SideNavItem>
        <SideNavItem
          href='#!fashionwanita' waves>
          Fashion Wanita
        </SideNavItem>
      </SideNav>
        <Slider
          fullscreen={false}
          options={{
            duration: 500,
            height: 400,
            indicators: true,
            interval: 6000
          }}>
          <Slide image={<img alt='' src='https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg' />}>
            <Caption placement='center'>
              <h3>
                Pantai
              </h3>
              <h5 className='light grey-text text-lighten-3'>
                Dapatkan Kesempatan Jalan-Jalan Ke Pantai Dengan Membeli Sebuah Product
              </h5>
            </Caption>
          </Slide>
          <Slide image={<img alt='' src='https://sdg-action.org/wp-content/uploads/2022/02/Susantono-scaled.jpg' />}>
            <Caption placement='left'>
              <h3>
                Promo Terbaik
              </h3>
              <h5 className='light grey-text text-lighten-3'>
                Dapatkan Promo Terbaik di Toko Kami
              </h5>
            </Caption>
          </Slide>
          <Slide image={<img alt='' src='https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72' />}>
            <Caption placement='right'>
              <h3>
                Harga Penginapan Terbaik Dari Kami
              </h3>
              <h5 className='light grey-text text-lighten-3'>
                Selalu Menjadi Yang Terbaik Untuk Harga Penginapan Di Selurih Dunia
              </h5>
            </Caption>
          </Slide>
        </Slider>
        <br />
        <span>Hot list</span>
        <Row>
          <Col m={3}>
            <Card className='medium' header={<CardTitle image='https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg'>
              Audio
            </CardTitle>}>
              Audio Technica - Mulai dari<span className='red'> Rp 910 rb</span>
            </Card>
          </Col>
          <Col m={3}>
            <Card className='medium' header={<CardTitle image='https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg'>
              Handphone
            </CardTitle>}>
              Handphone Samsung - Mulai Dari<span className='red'> Rp 200 rb</span>
            </Card>
          </Col>
          <Col m={3}>
            <Card className='medium' header={<CardTitle image='https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg'>
              Sequishy
            </CardTitle>}>
              Sequishy - Mulai Dari<span className='red'> Rp 5,5 rb</span>
            </Card>
          </Col>
          <Col m={3}>
            <Card className='medium' header={<CardTitle image='https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg'>
              Koleksi The Avengers
            </CardTitle>}>
              Koleksi The Avengers - Mulai Dari<span className='red'> Rp 10 rb</span>
            </Card>
          </Col>
        </Row>
        <Pagination
          activePage={2}
          item={10}
          maxButtons={8}
          leftBtn={<Icon>chevron_left</Icon>}
          rightBtn={<Icon>chevron_right</Icon>} />
      </div>
    )
  }
}

export default App;