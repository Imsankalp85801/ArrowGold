import React, {useRef} from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import QText from './QTexts'
import Colors from '../constants/Colors'
import Svg, {G, Path} from 'react-native-svg'
import {Divider, Tooltip} from 'react-native-elements'
import HeaderBackButton from './HeaderBackButton'
import CartItem from './CartItem'
import QInput from './QInput'
import { QButtonRaw } from './QButtons'
import QCheckbox from './QCheckbox'

/**
 * It renders the Checkout Cart page component.
 */

export default function CheckoutCart(props) {
  const tooltipRefTaxes = useRef(null); // use useRef to call method to toggle Tooltip. It is required when you want to show another react element instead of a text component to trigger tooltip. For e.g., custom react element to trigger tooltip is commented below.
  const tooltipRefShipping = useRef(null)

  return(
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <HeaderBackButton />
      </View>

      <View style={styles.cartList}>
        <CartItem
          intent='cart'
        />
        <Divider height={1} backgroundColor='#dcdcdc' style={{marginHorizontal: 20}} />
        <CartItem
          intent='cart'
        />
        <Divider height={1} backgroundColor='#dcdcdc' style={{marginHorizontal: 20}} />
        <CartItem
          intent='wishlist'
        />
      </View>

      <View>
        <View style={styles.couponTitleContainer}>
          <QText fontWeight='bold'>Got Coupon Code?</QText>
        </View>
        <View style={styles.innerWrap}>
          <QInput 
            label='Apply Code' 
            placeholder='Enter your coupon code here'            
          />
          <QButtonRaw
            icon={<Svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14">
              <Path id="Fill_5" data-name="Fill 5" d="M9.225,12.53l4.546-4.6H1.031a1.067,1.067,0,0,1,0-2.132H13.583L9.035,1.487C8.229.777,9.462-.5,10.266.208L16.8,6.417a.671.671,0,0,1,0,.947l-6.3,6.4c-.758.76-2.085-.473-1.279-1.231"/>
            </Svg>}
            // onPress={onPress}
          />
        </View>
      </View>

      <View>

        <View style={styles.couponTitleContainer}>
          <QText fontWeight='bold'>Summary</QText>
        </View>

        <View style={styles.cartSummaryContainer}>
          <QCheckbox
            title='Estimate Shipping & Tax'
            checked={true}
            //onPress={()=>setChecked(!checked)}
            size={16}
            iconRight={false}
            checkBoxAlign='right'
          />

          <View style={styles.cartSummaryWrap}>

            <View style={styles.cartCostWrap}>
              <QText>Sub Total</QText>
              <QText>₹ 450</QText>
            </View>

            <View style={styles.cartCostWrap}>
              <TouchableOpacity style={styles.toolTipTextWrap} onPress={()=>tooltipRefTaxes.current.toggleTooltip()} >
                <QText style={styles.toolTipParentText}>Taxes</QText>
                <Svg id="noun_i_2510065_copy" data-name="noun_i_2510065 copy" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                  <Path id="Shape" d="M0,6a6,6,0,1,1,6,6A6,6,0,0,1,0,6Z" fill="#b6b6b6"/>
                </Svg>
              </TouchableOpacity>
              <Tooltip 
                backgroundColor={Colors.whiteColor}
                containerStyle={styles.toolTipContainer}
                overlayColor='rgba(0,0,0,0.095)'
                withPointer={false}
                ref={tooltipRefTaxes}
                popover={
                  <View>
                    <View style={styles.cartCostWrap}>
                      <QText>Taxes</QText>
                      <QText>₹ 20</QText>
                    </View>
                    <View style={styles.cartCostWrap}>
                      <QText>SGST</QText>
                      <QText>₹ 10</QText>
                    </View>
                    <View style={styles.cartCostWrap}>
                      <QText>CGST</QText>
                      <QText>₹ 10</QText>
                    </View>
                  </View>
                }
              />
              <QText>₹ 450</QText>
            </View>

            <View style={styles.cartCostWrap}>
              <TouchableOpacity style={styles.toolTipTextWrap} onPress={()=>tooltipRefShipping.current.toggleTooltip()} >
                <QText style={styles.toolTipParentText}>Shipping</QText>
                <Svg id="noun_i_2510065_copy" data-name="noun_i_2510065 copy" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                  <Path id="Shape" d="M0,6a6,6,0,1,1,6,6A6,6,0,0,1,0,6Z" fill="#b6b6b6"/>
                </Svg>
              </TouchableOpacity>
              <Tooltip
                backgroundColor={Colors.whiteColor}
                containerStyle={styles.toolTipContainer}
                overlayColor='rgba(0,0,0,0.095)'
                withPointer={false}
                ref={tooltipRefShipping}
                popover={
                  <View>
                    <View style={styles.cartCostWrap}>
                      <QText>Shipping</QText>
                      <QText>₹ 20</QText>
                    </View>
                    <View style={styles.cartCostWrap}>
                      <QText>Delivery</QText>
                      <QText>₹ 10</QText>
                    </View>
                    <View style={styles.cartCostWrap}>
                      <QText>Vendor</QText>
                      <QText>₹ 10</QText>
                    </View>
                  </View>
                }
              />
              <QText>₹ 450</QText>
            </View>
            
          </View>
          <View style={styles.totalCostWrap}>
            <QText fontWeight='bold'>Grand Total</QText>
            <QText fontWeight='bold'>₹ 450</QText>
          </View>
          
        </View>
      </View>

    </View>    
  )
}

const styles = StyleSheet.create({
  container: {
    
  },
  headerContainer: {
    padding: 20,
    backgroundColor: '#F8F8FA'
  },
  cartList: {

  },
  couponTitleContainer: {
    padding: 20,
    backgroundColor: '#F8F8FA'
  },
  innerWrap: {
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  cartSummaryContainer: {
    backgroundColor: Colors.whiteColor,
    padding: 20
  },
  cartSummaryWrap: {
    marginTop: 20
  },
  cartCostWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5
  },
  totalCostWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  toolTipContainer: {
    width: 200,
    padding: 10,
    height: 'auto',
    left: 100,
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'stretch',
    borderRadius: 4
  },
  toolTipTextWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  toolTipParentText: {
    marginRight: 6
  }
})
