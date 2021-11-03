/**
    * @description      : 
    * @author           : TLeeuw
    * @group            : 
    * @created          : 03/11/2021 - 12:02:33
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/11/2021
    * - Author          : TLeeuw
    * - Modification    : 
**/



{/*---------------------------Header--------------------------*/}
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.header}>
          <Text style={{
            fontSize: 36, paddingLeft: 30,
            color: 'turquoise',
            textShadowColor: 'grey', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 1
          }}
          >
            What's your
          </Text>

          <Text style={{
            fontSize: 36, paddingLeft: 30, color: 'red',
            textShadowColor: 'grey',
            textShadowOffset: { width: 2, height: 2 },
            textShadowRadius: 1
          }} >
            EMERGENCY
          </Text>
        </View>

        <View style={{ marginTop: 50, marginLeft: 10 }}>
          <Avatar style={styles.avatar}
            rounded
            source={{
              uri: 'https://randomuser.me/api/portraits/men/44.jpg',
            }}
            size="large"
          />
          <Badge
            status="success"
            containerStyle={{ position: 'absolute', top: -4, right: -4 }}
          />
        </View>
      </View>