import React, { useState, ReactNode } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type MenuItem = {
  label: string;
  onPress?: () => void;
};

type HamburgerMenuProps = {
  children?: ReactNode;
  menuItems?: MenuItem[];
  menuWidth?: number;
};

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ children, menuItems = [], menuWidth = 250 }) => {
  const [open, setOpen] = useState(false);
  const slideAnim = React.useRef(new Animated.Value(-menuWidth)).current;

  const toggleMenu = () => {
    setOpen(!open);
    Animated.timing(slideAnim, {
      toValue: open ? -menuWidth : 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* Hamburger Icon */}
      <TouchableOpacity style={styles.hamburger} onPress={toggleMenu}>
        <Ionicons name="menu" size={32} color="black" />
      </TouchableOpacity>

      {/* Side Menu */}
      <Animated.View style={[styles.menu, { width: menuWidth, left: slideAnim }]}>
        <TouchableOpacity style={styles.closeIcon} onPress={toggleMenu}>
          <Ionicons name="close" size={28} color="black" />
        </TouchableOpacity>
        {menuItems.map((item, idx) => (
          <TouchableOpacity key={idx} style={styles.menuItem} onPress={() => {
            toggleMenu();
            item.onPress && item.onPress();
          }}>
            <Text style={styles.menuText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
      {/* <button>Pricing</button> */}

      {/* Main Content */}
      <View style={styles.content}>
        {children}
      </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  hamburger: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 6,
    elevation: 3,
  },
  menu: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    backgroundColor: '#fff',
    zIndex: 20,
    paddingTop: 60,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 0 },
    shadowRadius: 8,
    elevation: 8,
  },
  closeIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 21,
  },
  menuItem: {
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    fontSize: 18,
    color: '#222',
  },
  content: {
    flex: 1,
    zIndex: 1,
  },
});

export default HamburgerMenu;
export { HamburgerMenu };