import React, { useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import homeLogo from './Books/exams.jpg';

import GradeOne from './Screens/GradeOne';
import GradeTwo from './Screens/GradeTwo';
import GradeThree from './Screens/GradeThree';
import GradeFour from './Screens/GradeFour';
import GradeFive from './Screens/GradeFive';
import GradeSix from './Screens/GradeSix';
import GradeSeven from './Screens/GradeSeven';
import { Header } from './Components/Header'


function App() {
  const [grade, setGrade] = useState(0)
  const [menu, setMenu] = useState(false)


  return (
    <View style={{
      position: 'absolute',
      maxWidth: 360,
      alignItems: 'center',
    }}>



      {/**-----------------Content----------------- */}
      <View>
        {grade !== 1 ? (
          grade !== 2 ? (
            grade !== 3 ? (
              grade !== 4 ? (
                grade !== 5 ? (
                  grade !== 6 ? (
                    grade !== 7 ? (

                      <View >
                        <Header />
                        {!menu ?
                          (
                            <View >
   
                              <View style={{
                                position: 'absolute',
                                maxWidth: 360,
                              }}>
                                <View style={{ width: 360, alignItems: 'right', justifyContent: 'flex-end' }}>
                                  <Text style={{
                                    fontSize: 28,
                                    cursor: 'pointer'
                                  }}>=
                                  </Text>

                                  <View style={{ top: -41 }}>
                                    <Text onClick={() => setMenu(!menu)}
                                      style={{
                                        paddingLeft: 3,
                                        fontSize: 30,
                                        cursor: 'pointer'
                                      }}>_
                                    </Text>
                                  </View>
                                </View>

                                  <Image source={homeLogo} style={{
                                    top:-35,
                                    width: 360,
                                    height: 360,
                                    alignItems: 'center',
                                  }} />

                                <Text style={{
                                  maxWidth: 220,
                                  fontSize: 13,
                                  alignItems: 'center', justifyContent: 'center'
                                }}>
                                  Edu-Care thrives to better the education
                                  of the youth, with the aim to develop a brighter
                                  tommorrow!
                                </Text>
                              </View>

                              

                            </View>
                          ) : (

                            /*----------------------Menu----------------- */
                            <View style={{
                              position: 'relative',
                              maxWidth: 360,
                              alignItems: 'center',
                            }}>

                              <View style={{ position: 'relative', width: 360, alignItems: 'center', }}>

                                <View style={{ width: 360, left:340, alignItems: 'right', justifyContent: 'flex-end' }}>
                                  <Text style={{
                                    fontSize: 28,
                                    cursor: 'pointer'
                                  }}>=
                                  </Text>

                                  <View style={{ top: -41 }}>
                                    <Text onClick={() => setMenu(!menu)}
                                      style={{
                                        paddingLeft: 3,
                                        fontSize: 30,
                                        cursor: 'pointer'
                                      }}>_
                                    </Text>
                                  </View>
                                </View>

                                <Image source={homeLogo} style={{

                                  width: 360,
                                  height: 360,
                                  alignItems: 'center',
                                }} />


                                <Text style={styles.mainContent}>
                                  Edu-Care thrives to better the education of the
                                  youth, with the aim to develop a brighter tommorrow!
                                </Text>
                              </View>
                              
                              <View style={{
                                position: 'absolute',
                                width: 160,
                                height: 559,
                                left: -10,
                                opacity: 0.8,
                                alignItems: 'center',
                                textAlign: 'center',
                                backgroundColor: '#f47066'
                              }}>

                                <Text style={{ color: '#fff' }}>
                                  Choose Grade:
                                </Text>

                                <View style={{ paddingTop: 10 }}>
                                  <Text style={{ color: '#fff', cursor: "pointer" }}
                                    onClick={() => setGrade(1)}>
                                    GRADE1
                                  </Text>
                                  <Text style={{ color: '#fff', cursor: "pointer" }}
                                    onClick={() => setGrade(2)}>
                                    GRADE2
                                  </Text>
                                  <Text style={{ color: '#fff', cursor: "pointer" }}
                                    onClick={() => setGrade(3)}>
                                    GRADE3
                                  </Text>
                                  <Text style={{ color: '#fff', cursor: "pointer" }}
                                    onClick={() => setGrade(4)}>
                                    GRADE4
                                  </Text>
                                  <Text style={{ color: '#fff', cursor: "pointer" }}
                                    onClick={() => setGrade(5)}>
                                    GRADE5
                                  </Text>
                                  <Text style={{ color: '#fff', cursor: "pointer" }}
                                    onClick={() => setGrade(6)}>
                                    GRADE6
                                  </Text>
                                  <Text style={{ color: '#fff', cursor: "pointer" }}
                                    onClick={() => setGrade(7)}>
                                    GRADE7
                                  </Text>
                                </View>
                              </View>
                            </View>

                          )}

                      </View>
                    ) : (
                      <GradeSeven grade={grade} />
                    )
                  ) : (
                    <GradeSix grade={grade} />
                  )
                ) : (
                  <GradeFive grade={grade} />
                )
              ) : (
                <GradeFour grade={grade} />
              )
            ) : (
              <GradeThree grade={grade} />
            )
          ) : (
            <GradeTwo grade={grade} />
          )
        ) : (
          <GradeOne grade={grade} />
        )}

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  App: {
    position: 'absolute',
    maxWidh: 360,
    alignItems: 'center',
  },

  AppLogo: {
    height: 60,
    width: 360,
  },

  /* .App-logo2 {
    height: 40vmin;
    pointer-events: none;
  }
  
  @media (prefers-reduced-motion: no-preference) {
    .App-logo2 {
      animation: App-logo-spin2 infinite 20s linear;
    }
  } */

  AppHeader: {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  homeMenu: {
    position: 'absolute',
    width: 160,
    height: 559,
    top: 48,
    left: 0,
    opacity: 0,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#f47066'
  },

  mainContent: {
    maxWidth: 220,
    fontSize: 13,
    alignContent: 'flex-start',
    justifyContent: 'flex-start'
  },

  menuBar: {
    paddingLeft: -320
  }
})

export default App
