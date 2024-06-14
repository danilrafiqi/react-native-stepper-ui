import React, { FC, useState, ReactElement, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  ScrollView,
} from 'react-native';

export interface StepperProps {
  active: number;
  content: ReactElement[];
  onNext: Function;
  onBack: Function;
  onFinish: Function;
  wrapperStyle?: ViewStyle;
  stepStyle?: ViewStyle;
  stepLine?: ViewStyle;
  stepTextStyle?: TextStyle;
  buttonNextStyle?: ViewStyle;
  buttonBackStyle?: ViewStyle;
  buttonFinishStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
  showButton?: boolean;
  nextButtonLabel?: string;
  backButtonLabel?: string;
  finishButtonLabel?: string;
}

const search = (keyName: number, myArray: number[]): boolean => {
  return myArray.some((val) => val === keyName);
};

const Stepper: FC<StepperProps> = (props) => {
  const {
    active,
    content,
    onBack,
    onNext,
    onFinish,
    wrapperStyle,
    stepLine,
    stepStyle,
    stepTextStyle,
    buttonNextStyle,
    buttonBackStyle,
    buttonFinishStyle,
    buttonTextStyle,
    showButton = true,
    nextButtonLabel,
    backButtonLabel,
    finishButtonLabel
  } = props;
  const [step, setStep] = useState<number[]>([0]);
  const pushData = (val: number) => {
    setStep((prev) => [...prev, val]);
  };

  const removeData = () => {
    setStep((prev) => {
      prev.pop();
      return prev;
    });
  };

  useEffect(() => {
    if (step[step.length - 1] > active) {
      removeData();
    } else {
      pushData(active);
    }
  }, [active]);

  return (
    <View style={wrapperStyle}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {content.map((_, i) => {
          return (
            <React.Fragment key={i}>
              {i !== 0 && (
                <View
                  style={[{
                    flex: 1,
                    height: 1,
                    backgroundColor: 'grey',
                    opacity: 1,
                    marginHorizontal: 10,
                  }, stepLine]}
                />
              )}
              <View
                style={[
                  {
                    backgroundColor: '#1976d2',
                    width: 30,
                    height: 30,
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: search(i, step) ? 1 : 0.3,
                  },
                  stepStyle,
                ]}
              >
                {search(i, step) ? (
                  <Text
                    style={[
                      {
                        color: 'white',
                      },
                      stepTextStyle,
                    ]}
                  >
                    &#10003;
                  </Text>
                ) : (
                  <Text
                    style={[
                      {
                        color: 'white',
                      },
                      stepTextStyle,
                    ]}
                  >
                    {i + 1}
                  </Text>
                )}
              </View>
            </React.Fragment>
          );
        })}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {content[active]}
      </ScrollView>
      {showButton && (
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          {active !== 0 && (
            <TouchableOpacity
              style={[
                {
                  padding: 10,
                  borderRadius: 4,
                  alignSelf: 'flex-start',
                  marginRight: 10,
                },
                buttonBackStyle,
                {
                  backgroundColor: '#a1a1a1',
                },
              ]}
              onPress={() => {
                // removeData();
                onBack();
              }}
            >
              <Text style={[{ color: 'white' }, buttonTextStyle]}>{backButtonLabel ?? 'Back'}</Text>
            </TouchableOpacity>
          )}
          {content.length - 1 !== active && (
            <TouchableOpacity
              style={[
                {
                  padding: 10,
                  borderRadius: 4,
                  backgroundColor: '#1976d2',
                  alignSelf: 'flex-start',
                  marginRight: 10,
                },
                buttonNextStyle,
              ]}
              onPress={() => {
                // pushData(active + 1);
                onNext();
              }}
            >
              <Text style={[{ color: 'white' }, buttonTextStyle]}>{nextButtonLabel ?? 'Next'}</Text>
            </TouchableOpacity>
          )}
          {content.length - 1 === active && (
            <TouchableOpacity
              style={[
                {
                  padding: 10,
                  borderRadius: 4,
                  backgroundColor: '#1976d2',
                  alignSelf: 'flex-start',
                },
                buttonFinishStyle,
              ]}
              onPress={() => onFinish()}
            >
              <Text style={[{ color: 'white' }, buttonTextStyle]}>{finishButtonLabel ?? 'Finish'}</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default Stepper;
