// Wishlist.js
import React, { useState } from 'react';
import {
  Box,
  Heading,
  VStack,
  Button,
  IconButton,
  Spacer,
  CloseButton,
} from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    // Add more wishlist items as needed
  ]);

  const removeFromWishlist = (itemId) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  return (
    <Box p={8}>
      <Heading mb={4}>Wishlist</Heading>
      <VStack align="start" spacing={4}>
        {wishlistItems.map((item) => (
          <Box
            key={item.id}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            w="100%"
            display="flex"
            alignItems="center"
          >
            <FaHeart color="red" size={24} />
            <Spacer />
            <Box flex="1">{item.name}</Box>
            <Spacer />
            <IconButton
              icon={<CloseButton />}
              onClick={() => removeFromWishlist(item.id)}
            />
          </Box>
        ))}
      </VStack>
      {wishlistItems.length === 0 && (
        <Box mt={4} textAlign="center">
          Your wishlist is empty.
        </Box>
      )}
    </Box>
  );
};

export default Wishlist;
