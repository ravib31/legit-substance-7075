import { useToast } from '@chakra-ui/react';

const useCustomToast = () => {
  const toast = useToast();

  const showToast = (title, status, duration) => {
    toast({
      position: 'bottom',
      title: title,
      status: status,
      duration: duration,
      isClosable: true,
      
    });
  };

  return showToast;
};

export default useCustomToast;
