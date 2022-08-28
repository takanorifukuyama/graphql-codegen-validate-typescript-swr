import {
  Badge,
  FormControl,
  FormLabel,
  Input,
  Text,
  InputProps,
  FormErrorMessage,
} from "@chakra-ui/react";
import { forwardRef } from "react";

export type TextFormProps = {
  label: string;
  placeholder: string;
  name: string;
  errorMessage?: string;
} & InputProps;

export const TextInput = forwardRef<HTMLInputElement, TextFormProps>(
  function TextForm(
    { isRequired, name, placeholder, label, errorMessage, ...rest },
    ref
  ) {
    console.log(errorMessage);
    return (
      <FormControl id={name} w="400px">
        <FormLabel m={1}>
          <Text display="inline" fontSize="13px" fontWeight="bold">
            {label}
          </Text>{" "}
          {isRequired && (
            <Badge
              bg="red.400"
              color="white"
              py="3px"
              px="5px"
              borderRadius="7px"
            >
              必須
            </Badge>
          )}
        </FormLabel>

        <Input
          placeholder={placeholder}
          borderColor="gray.500"
          borderRadius="10px"
          color="gray.700"
          _placeholder={{
            fontSize: "14px",
          }}
          ref={ref}
          {...rest}
        />
        {errorMessage || <FormErrorMessage>{errorMessage}</FormErrorMessage>}
      </FormControl>
    );
  }
);
